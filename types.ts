import {ReactNode} from "react"

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

export interface BlogInterface {

}

export interface ButtonInterface {
  href?: string,
  children?: ReactNode
  onClick?: () => void
}