import Affiliation from './Affiliation';
import Testimony from './Testimony';

export default class Club extends Affiliation {
  constructor(
    private mid: number,
    public name: string,
    public description: string,
    public longDescription?: string,
    public testimonyArr?: Testimony[]
  ) {
    super("B"+mid, name, description, longDescription, testimonyArr);
  }
}