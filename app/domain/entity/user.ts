export interface IUser {
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
} as IUser