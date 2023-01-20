import { randomUUID } from 'crypto';
import { MedicCrm } from './medicCrm';
import { MedicExpertise } from './medicExpertise';
import { MedicName } from './medicName';
import { WorkInfo } from './workInfo';

export interface MedicProps {
  name: MedicName;
  crm: MedicCrm;
  cellphone: number;
  workInfo: WorkInfo;
  expertise: MedicExpertise;
  active?: boolean;
}

export class Medic {
  private props: MedicProps;
  private _id: string;
  constructor(props: MedicProps, id?: string, active?: boolean) {
    this.props = { ...props, active: active ?? true };
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set name(name: MedicName) {
    this.props.name = name;
  }

  public get name(): MedicName {
    return this.props.name;
  }

  public set crm(crm: MedicCrm) {
    this.props.crm = crm;
  }

  public get crm(): MedicCrm {
    return this.props.crm;
  }

  public set cellphone(cellphone: number) {
    this.props.cellphone = cellphone;
  }

  public get cellphone(): number {
    return this.props.cellphone;
  }

  public set workInfo(workInfo: WorkInfo) {
    this.props.workInfo = workInfo;
  }

  public get workInfo(): WorkInfo {
    return this.props.workInfo;
  }

  public set expertise(expertise: MedicExpertise) {
    this.props.expertise = expertise;
  }

  public get expertise(): MedicExpertise {
    return this.props.expertise;
  }

  public hideMedic(): void {
    this.props.active = false;
  }

  public get active(): boolean {
    return this.props.active;
  }
}
