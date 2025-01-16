export default class Project {
  constructor(
    public title: string,
    public images: string[],
    public description?: string,
    public link?: string
  ) {}
}