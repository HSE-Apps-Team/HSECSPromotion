import Testimony from "./Testimony";
import Project from "./Project";

export default abstract class Affiliation {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public longDesc?: string,
    public icon?: string,
    public testimonyArr?: Testimony[],
    public images?: string[],
    public projects?: Project[]
  ) {}

}
