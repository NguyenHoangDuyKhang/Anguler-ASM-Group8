export interface IUser {
    id: number,
    full_name: string,
    first_name: string,
    last_name: string,
    email: string,
    role_ID: number,
    gender: number,
    createdAt: string,
    updatedAt: string
}

export type IListUser = Pick<IUser, 'id' | 'first_name' | 'last_name' | 'email' | 'role_ID'>[]

export type IFormAddType = Omit<IUser, "full_name" | "id" | "updatedAt" | "createdAt"> 

export type IFormUpdateType = Omit<IUser, "full_name" | "updatedAt" | "createdAt"> 

export interface IUserAPI {
    data : IListUser,
    pagination? : any,
    success : boolean,
    message: string,
}





