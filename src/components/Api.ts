
// data.js
export async function fetchData() {
  let direcciones = {
    "id":"https://api.jikan.moe/v4/manga/",
    "rendom":"https://api.jikan.moe/v4/random/manga",
  }
  const options = { method: 'GET' };
  try {
    const response = await fetch("https://api.jikan.moe/v4/manga/", options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let dato =response.json();
    return dato;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export interface RootObject {
  data:       Datum[];
  links:      Links;
  meta:       Meta;
  pagination: Pagination;
 }
 
 export interface Datum {
  approved:        boolean;
  authors:         Author[];
  background:      string;
  chapters:        number | null;
  demographics:    Author[];
  explicit_genres: any[];
  favorites:       number;
  genres:          Author[];
  images:          { [key: string]: Image };
  mal_id:          number;
  members:         number;
  popularity:      number;
  published:       Published;
  publishing:      boolean;
  rank:            number;
  score:           number;
  scored:          number;
  scored_by:       number;
  serializations:  Author[];
  status:          Status;
  synopsis:        string;
  themes:          Author[];
  title:           string;
  title_english:   string;
  title_japanese:  string;
  title_synonyms:  string[];
  titles:          Title[];
  type:            DatumType;
  url:             string;
  volumes:         number | null;
 }
 
 export interface Author {
  mal_id: number;
  name:   string;
  type:   AuthorType;
  url:    string;
 }
 
 export enum AuthorType {
  Manga = "manga",
  People = "people",
 }
 
 export interface Image {
  image_url:       string;
  large_image_url: string;
  small_image_url: string;
 }
 
 export interface Published {
  from:   Date;
  prop:   Prop;
  string: string;
  to:     Date | null;
 }
 
 export interface Prop {
  from: From;
  to:   From;
 }
 
 export interface From {
  day:   number | null;
  month: number | null;
  year:  number | null;
 }
 
 export enum Status {
  Finished = "Finished",
  OnHiatus = "On Hiatus",
  Publishing = "Publishing",
 }
 
 export interface Title {
  title: string;
  type:  TitleType;
 }
 
 export enum TitleType {
  Default = "Default",
  English = "English",
  French = "French",
  German = "German",
  Japanese = "Japanese",
  Spanish = "Spanish",
  Synonym = "Synonym",
 }
 
 export enum DatumType {
  Manga = "Manga",
 }
 
 export interface Links {
  first: string;
  last:  string;
  next:  string;
  prev:  null;
 }
 
 export interface Meta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
 }
 
 export interface Link {
  active: boolean;
  label:  string;
  url:    null | string;
 }
 
 export interface Pagination {
  current_page:      number;
  has_next_page:     boolean;
  items:             Items;
  last_visible_page: number;
 }
 
 export interface Items {
  count:    number;
  per_page: number;
  total:    number;
 }
 