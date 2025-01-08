import Affiliation from './Affiliation';

export default class Course extends Affiliation {
  constructor(
    private mid: number,
    public name: string,
    public description: string,
    public longDesc?: string
  ) {
    super("A"+mid, name, description, longDesc);
  }
}