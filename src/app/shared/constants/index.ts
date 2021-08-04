export enum OperationStatus {
  Ok = 'ok',
  Error = 'error',
}

export type Operation = {
  status: OperationStatus
};

export default {
  OperationStatus,
};
