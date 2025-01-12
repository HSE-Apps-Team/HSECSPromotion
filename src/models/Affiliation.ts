import Testimony from "./Testimony";

export default abstract class Affiliation {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public longDesc?: string,
    public icon?: string,
    public testimonyArr?: Testimony[],
    public images?: string[]
  ) {}

}
