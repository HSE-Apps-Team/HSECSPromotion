import Affiliation from './Affiliation';
import Testimony from './Testimony';

export default class Course extends Affiliation {
  constructor(
    private mid: number,
    public name: string,
    public description: string,
    public longDesc?: string,
    public testimonyArr?: Testimony[]
  ) {
    super("A"+mid, name, description, longDesc, testimonyArr);
  }
}