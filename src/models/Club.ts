import Affiliation from './Affiliation';

export default class Club extends Affiliation {
  constructor(
    private mid: number,
    public name: string,
    public description: string,
    public longDescription?: string
  ) {
    super("B"+mid, name, description, longDescription);
  }
}