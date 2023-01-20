export interface WorkProps {
  landline: number;
  address: string;
  district: string;
  city: string;
  uf: string;
}

export class WorkInfo {
  private props: WorkProps;
  constructor(props: WorkProps) {
    this.props = props;
  }

  public get landline(): number {
    return this.props.landline;
  }

  public get address(): string {
    return this.props.address;
  }

  public get district(): string {
    return this.props.district;
  }

  public get city(): string {
    return this.props.city;
  }

  public get uf(): string {
    return this.props.uf;
  }
}
