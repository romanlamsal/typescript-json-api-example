import Checks from "./"
import { describe, expect, it } from "vitest"

describe("checker", () => {
    const testObj = (obj, expected) => () => {
        // given
        // args

        // when
        const isValid = Checks.isApiRequest(obj)

        // then
        expect(isValid).toEqual(expected)
    }

    it("should be true for valid object", testObj({ requiredStr: "bar", optionalNum: 123 }, true))

    it("should be false for invalid object", testObj({ requiredStr: 123, optionalNum: 123 }, false))

    it("should be true for valid string union value", testObj({ requiredStr: "", optionalStrUnion: "format-a" }, true))

    it(
        "should be false for random string in string union value",
        testObj({ requiredStr: "", optionalStrUnion: "justsomerandomstring" }, false)
    )
})
