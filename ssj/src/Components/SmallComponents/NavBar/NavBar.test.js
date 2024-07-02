// Test file for Navbar

import { MemoryRouter } from "react-router"
import NavBar from "./NavBar"
import {render, screen, fireEvent} from "@testing-library/react"

describe("Navbar tests", () => {
    it("Logo renders", () => {
       render(<MemoryRouter><NavBar /></MemoryRouter>)

       expect(screen.getByAltText("logo")).toBeInTheDocument()
    })
})