import tiles, { updateTile, addTile } from "./tilesSlice"

it("should handle tile update", () => {
  expect(
    tiles(
      [
        {
          id: "first",
          from: "green",
          to: "blue",
        },
      ],
      {
        type: updateTile.type,
        payload: {
          id: "first",
          updates: {
            from: "yellow",
            to: "red",
          },
        },
      }
    )
  ).toEqual([{ id: "first", from: "yellow", to: "red" }])
})

it("should handle add tile", () => {
  expect(
    tiles([], {
      type: addTile.type,
      payload: {
        id: "added",
        from: "dark",
        to: "light",
      },
    })
  ).toEqual([
    {
      id: "added",
      from: "dark",
      to: "light",
    },
  ])
})
