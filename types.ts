
export interface LoginInterface {
  username: string,
  password: string
}

export interface SignupInterface {
  fullname: string,
  email: string,
  username: string,
  password: string,
  confirmPass: string
}

export interface UserInterface {
  fullname: string,
  email: string,
  username: string,
  password: string
}

export interface BlogInterface {

}

export type BtnVariant = "text" | "outlined" | "contained" | undefined;