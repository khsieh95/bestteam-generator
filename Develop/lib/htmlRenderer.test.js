const rewire = require("rewire")
const htmlRenderer = rewire("./htmlRenderer")
const renderManager = htmlRenderer.__get__("renderManager")
const renderEngineer = htmlRenderer.__get__("renderEngineer")
const renderIntern = htmlRenderer.__get__("renderIntern")
const renderMain = htmlRenderer.__get__("renderMain")
const replacePlaceholders = htmlRenderer.__get__("replacePlaceholders")
// @ponicode
describe("htmlRenderer", () => {
    test("0", () => {
        let callFunction = () => {
            htmlRenderer("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            htmlRenderer(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            htmlRenderer("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            htmlRenderer(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            htmlRenderer("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            htmlRenderer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderManager", () => {
    test("0", () => {
        let callFunction = () => {
            renderManager({ getName: () => "Gail Hoppe", getRole: () => "Becky Bednar", getEmail: () => "email@Google.com", getId: () => "Becky Bednar", getOfficeNumber: () => "850-826-8625" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderManager({ getName: () => "Becky Bednar", getRole: () => "Becky Bednar", getEmail: () => "something@example.com", getId: () => "Maurice Purdy", getOfficeNumber: () => "807-870-7660" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderManager({ getName: () => "Ronald Keeling", getRole: () => "Gail Hoppe", getEmail: () => "something.example.com", getId: () => "Maurice Purdy", getOfficeNumber: () => "354-802-3065" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderManager({ getName: () => "Ronald Keeling", getRole: () => "Gail Hoppe", getEmail: () => "bed-free@tutanota.de", getId: () => "Ronald Keeling", getOfficeNumber: () => "813-639-1831" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderManager({ getName: () => "Maurice Purdy", getRole: () => "Becky Bednar", getEmail: () => "bed-free@tutanota.de", getId: () => "Gail Hoppe", getOfficeNumber: () => "850-826-8625" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderManager(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderEngineer", () => {
    test("0", () => {
        let callFunction = () => {
            renderEngineer({ getName: () => "Gail Hoppe", getRole: () => "Janet Homenick", getEmail: () => "something.example.com", getId: () => "Ronald Keeling", getGithub: () => "1.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderEngineer({ getName: () => "Becky Bednar", getRole: () => "Maurice Purdy", getEmail: () => "user1+user2@mycompany.com", getId: () => "Janet Homenick", getGithub: () => "1.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderEngineer({ getName: () => "Ronald Keeling", getRole: () => "Maurice Purdy", getEmail: () => "TestUpperCase@Example.com", getId: () => "Gail Hoppe", getGithub: () => "v4.0.0-rc.4" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderEngineer({ getName: () => "Becky Bednar", getRole: () => "Gail Hoppe", getEmail: () => "something.example.com", getId: () => "Janet Homenick", getGithub: () => "1.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderEngineer({ getName: () => "Gail Hoppe", getRole: () => "Gail Hoppe", getEmail: () => "user@host:300", getId: () => "Gail Hoppe", getGithub: () => "^5.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderEngineer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderIntern", () => {
    test("0", () => {
        let callFunction = () => {
            renderIntern({ getName: () => "Gail Hoppe", getRole: () => "Becky Bednar", getEmail: () => "something.example.com", getId: () => "Janet Homenick", getSchool: () => "Harbors" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderIntern({ getName: () => "Becky Bednar", getRole: () => "Gail Hoppe", getEmail: () => "user@host:300", getId: () => "Becky Bednar", getSchool: () => "Lights" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderIntern({ getName: () => "Janet Homenick", getRole: () => "Maurice Purdy", getEmail: () => "something@example.com", getId: () => "Gail Hoppe", getSchool: () => "Expressway" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderIntern({ getName: () => "Janet Homenick", getRole: () => "Becky Bednar", getEmail: () => "email@Google.com", getId: () => "Becky Bednar", getSchool: () => "Lights" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderIntern({ getName: () => "Janet Homenick", getRole: () => "Becky Bednar", getEmail: () => "user1+user2@mycompany.com", getId: () => "Maurice Purdy", getSchool: () => "Port" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderIntern(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderMain", () => {
    test("0", () => {
        let callFunction = () => {
            renderMain("<html> HTML </html>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderMain("<source src=\"http://www.google.com\">")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderMain(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("replacePlaceholders", () => {
    test("0", () => {
        let callFunction = () => {
            replacePlaceholders("Jean-Philippe", -1, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            replacePlaceholders("Jean-Philippe", "bar", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            replacePlaceholders("Michael", -1, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            replacePlaceholders("Edmond", 0.0, "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            replacePlaceholders("Edmond", -10, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            replacePlaceholders("", -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
