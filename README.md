# Kyra Frontend Assignment: Asset Review

## How to Run 
- `cd api && npm ci && npm run dev` (runs on port 3000)
- `cd front && npm ci && npm run dev` (nextjs frontend runs on port 3001)

## Notes on my approach
- I used nextjs with shadcn and react-query 
- I changed the API a bit to save some querying (I did get everything to work without changing the API, the last commit with unchanged API is this: 836c962e59def658f7529e9a7dfa24d27dcd7890)

## Tradeoffs 
- stack: (nextjs, tailwind, shadcn):
  - SSR and SSG 
  - fast styling 
  - file based routing 
  - reusable style system
- react query:
  - controls data freshness, background refetching, optimistic updates 
  - provides loading/error states 
- client side filtering on assets page:
  - I just assumed projects would have limited number of assets (didn't bother with pagination and API changes)
  - hardcoded colors (would be better to stick them into globals.css)
  - comments load without pagination
- websocket for real-time comment updates


## Notes 
structure:
- i mirrored the UI urls to follow the backend enpoints, i.e:
  - `/assets` calls the `/api/assets` endpoint 
  - `/assets/[id]` shows the specific asset page 
- I like to structure my folders like so: 
  - page
    - page.tsx
    - _components 
    - _hooks 
- this structure doesn't pollute the `components` folder 

the API changes I made: 
- originally the API didn't have an endpoint for a specific asset, so I added `/api/assets/[id]` endpoint 
- imo this is better API design, because the user can click a link in their history for example and relying solely on `/api/assets` would require fetching a bunch of unnecessary data and filtering through it, which is inefficient 

- i also updated `/api/assets` to return the number of comments as part of the asset 
- this saves us from having to aggregate data on the frontend and saves us from having to perform a separate request to the `/api/assets/[id]/comments` endpoint for every single asset 

general approach: 
- I use react-query to perform the HTTP requests
- I use TailwindCss and shadcn to be able to quickly style the components
- nextjs because it supports SSR, SSG and CSR, as well as having nice features like file based routing
  - with these technologies I spend less time fiddling and configuring and more time building
- in the asset page, I split the screen into 2 parts as per design:
  - I grouped them into `LeftScreen` and `RightScreen` components 
  - this way it was easier to make the design responsive 
  - the right screen has class `hidden md:block`, and it's replaced by a drawer on smaller screens

general notes:
- I noticed the PATCH `/assets/[id]` endpoint only allowed to update assets that are pepnding admin review:
```
  if (asset.status !== ("PENDING_ADMIN_REVIEW" satisfies Status)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Asset is not pending admin review",
    });
  }
```
- so I disabled the `Edit Status` button for assets of the wrong status:
```
<Button
  disabled={asset.status !== "PENDING_ADMIN_REVIEW"}
  className="bg-gradient-to-r from-violet-800 to-pink-400"
>
  Edit Status
</Button>
```

if I had more time, I would: 
- iterate on the style:
  - style the `RightScreen` drawer that's visible on mobile a bit more 
  - style the `EditStatusDialog` a bit more 
  - tidied up the colors, they're currently hardcoded but `globals.css` is a better place for those 
- messaging:
  - right now the messages are all loaded into memory in one go
  - if there's a lot of messages, it might make sense to use pagination instead, but that would require changes to the api
- assets
  - possibly add pagination to the `/assets` page
  - maybe it would make more sense to have the API return the assets by status (like `Needs admin review`?), this way the groups could be fetched with different requests (like `/api/assets?status=ADMIN_REVIEW`)
  - the number of assets with each status is currently calculated based on all the data returned from the `/api/assets` endpoint. Ideally there should be a different endpoint that gets that data, which would be necessary if something like pagination was implemented
