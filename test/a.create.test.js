import { existsSync, unlinkSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Datastore from "../src/Datastore.js";

const root = dirname(fileURLToPath(import.meta.url, "."));

describe("testing datastore creation", () => {
    describe("new Datastore('foo.db')", () => {
        it("should create foo.db based on string filename", async () => {
            const datastore = Datastore.create("foo.db");
            await datastore.load();
            expect(existsSync("foo.db")).toBe(true);
            unlinkSync("foo.db");
        });
    });

    describe("new Datastore({ filename: 'bar.db' })", () => {
        it("sould create bar.db based on object parameters", async () => {
            const datastore = Datastore.create({ filename: "bar.db" });
            await datastore.load();
            expect(existsSync("bar.db")).toBe(true);
            unlinkSync("bar.db");
        });
    });

    describe("new Datastore()", () => {
        it("should create in memory only database", () => {
            const datastore = Datastore.create();
            expect(datastore.inMemoryOnly).toBe(true);
        });
    });
});
