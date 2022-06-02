import {IMovie} from "./IMovie";

export interface IPage {
  page: number
  results: [
    IMovie[]
  ]
}
