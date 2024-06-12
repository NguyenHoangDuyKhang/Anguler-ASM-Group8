export interface IPlans {
    id : number
    slug : string
    name : string;
    author : string;
    category : string
    specialize : string
    description : string;
    status : number;
    status_name : string;
    createdAt : string;
    updatedAt?: string;
    publishedAt?: string;
    finishedAt?: string;
}


export type IListPlans = Pick<IPlans, 'id' | 'name' | 'slug' | 'status_name' | 'createdAt'>


export interface IPlanFiles {
    id : number
    name : string;
    type : number
}

