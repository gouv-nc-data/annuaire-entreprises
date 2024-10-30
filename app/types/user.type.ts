export interface User {
    userId: string,
    firstname: string,
    lastname: string,
    email: string
}

export const fakeAgentUser = {
    userId: "some-random-id",
    firstname: "Agent",
    lastname: "Gouv.nc",
    email: "agent@gouv.nc"
} as User