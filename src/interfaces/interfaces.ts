//!Response

export interface ResponseToClient {
  status: number
  msg: string,
  error: boolean
  data: any
}


//!Response end
export interface ValidateToken {
  "error": string,
  "acces": boolean
}

export interface UserData {
  name: string
  lastName: string
  email: string
  password: string
  imageProfile: string
}





