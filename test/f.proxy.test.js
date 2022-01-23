import Cursor from "../src/Cursor.js";
import Datastore from "../src/Datastore.js";
import Persistence from "@seald-io/nedb/lib/persistence";

describe("testing datastore proxy", () => {
    const datastore = Datastore.create("test.db");

    it("should not affect promise returns", () => {
        expect(datastore.find({}) instanceof Cursor).toBe(true);
        expect(datastore.insert({ proxy: true }) instanceof Promise).toBe(true);
    });

    it("should return original datastore values", () => {
        expect(datastore.persistence instanceof Persistence).toBe(true);
    });
});
