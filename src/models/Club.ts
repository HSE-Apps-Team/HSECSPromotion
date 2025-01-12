import Affiliation from './Affiliation';
import Testimony from './Testimony';

export default class Club extends Affiliation {
  constructor(
    private mid: number,
    public name: string,
    public description: string,
    public longDesc?: string,
    public icon?: string,
    public testimonyArr?: Testimony[],
    public images?: string[]
  ) {
    super("B"+mid, name, description, longDesc, icon, testimonyArr, images);
  }
}