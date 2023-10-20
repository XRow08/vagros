/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace VagrosMarketplace {
  export type CycleStruct = {
    cycleId: BigNumberish;
    totalSupply: BigNumberish;
    unitPrice: BigNumberish;
    paymentToken: string;
    expiration: BigNumberish;
  };

  export type CycleStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    cycleId: BigNumber;
    totalSupply: BigNumber;
    unitPrice: BigNumber;
    paymentToken: string;
    expiration: BigNumber;
  };
}

export interface Vagros_marketplaceInterface extends utils.Interface {
  functions: {
    "Cycles(uint256)": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "buyCycle(uint256,uint256)": FunctionFragment;
    "createCycle(uint256,uint256,address,uint256)": FunctionFragment;
    "cycleRewardClaimed(uint256,address)": FunctionFragment;
    "cycleRewards(uint256)": FunctionFragment;
    "getCycle(uint256)": FunctionFragment;
    "getCycles()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isCycleSold(uint256)": FunctionFragment;
    "isSupportedPaymentToken(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "requestReimbursement(uint256)": FunctionFragment;
    "requestReward(uint256)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setCycleReward(uint256,uint256,uint256)": FunctionFragment;
    "setSupportedPaymentToken(address,bool)": FunctionFragment;
    "setVagrosAllowlist(address)": FunctionFragment;
    "setVagrosCycleToken(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Cycles"
      | "DEFAULT_ADMIN_ROLE"
      | "buyCycle"
      | "createCycle"
      | "cycleRewardClaimed"
      | "cycleRewards"
      | "getCycle"
      | "getCycles"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "isCycleSold"
      | "isSupportedPaymentToken"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "pause"
      | "paused"
      | "renounceRole"
      | "requestReimbursement"
      | "requestReward"
      | "revokeRole"
      | "setCycleReward"
      | "setSupportedPaymentToken"
      | "setVagrosAllowlist"
      | "setVagrosCycleToken"
      | "supportsInterface"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Cycles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyCycle",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCycle",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cycleRewardClaimed",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cycleRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCycle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getCycles", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isCycleSold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedPaymentToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestReimbursement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCycleReward",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportedPaymentToken",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setVagrosAllowlist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVagrosCycleToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "Cycles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyCycle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cycleRewardClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cycleRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCycle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCycles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCycleSold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedPaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestReimbursement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCycleReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupportedPaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVagrosAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVagrosCycleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "CycleAmountBought(uint256,address,uint256,address)": EventFragment;
    "CycleCreated(uint256,uint256,uint256,address,uint256)": EventFragment;
    "CycleSoldOut(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CycleAmountBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CycleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CycleSoldOut"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CycleAmountBoughtEventObject {
  cycleId: BigNumber;
  buyer: string;
  amount: BigNumber;
  paymentToken: string;
}
export type CycleAmountBoughtEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  CycleAmountBoughtEventObject
>;

export type CycleAmountBoughtEventFilter =
  TypedEventFilter<CycleAmountBoughtEvent>;

export interface CycleCreatedEventObject {
  cycleId: BigNumber;
  totalSupply: BigNumber;
  unitPrice: BigNumber;
  paymentToken: string;
  expiration: BigNumber;
}
export type CycleCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber],
  CycleCreatedEventObject
>;

export type CycleCreatedEventFilter = TypedEventFilter<CycleCreatedEvent>;

export interface CycleSoldOutEventObject {
  id: BigNumber;
}
export type CycleSoldOutEvent = TypedEvent<
  [BigNumber],
  CycleSoldOutEventObject
>;

export type CycleSoldOutEventFilter = TypedEventFilter<CycleSoldOutEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Vagros_marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Vagros_marketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Cycles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
        cycleId: BigNumber;
        totalSupply: BigNumber;
        unitPrice: BigNumber;
        paymentToken: string;
        expiration: BigNumber;
      }
    >;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    buyCycle(
      _cycleId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createCycle(
      _totalSupply: BigNumberish,
      _unitPrice: BigNumberish,
      _paymentToken: string,
      _expiration: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    cycleRewardClaimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cycleRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; releaseDate: BigNumber }
    >;

    getCycle(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VagrosMarketplace.CycleStructOutput]>;

    getCycles(
      overrides?: CallOverrides
    ): Promise<[VagrosMarketplace.CycleStructOutput[]]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _operator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isCycleSold(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSupportedPaymentToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requestReimbursement(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requestReward(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setCycleReward(
      _cycleId: BigNumberish,
      _rewardAmount: BigNumberish,
      _releaseDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setSupportedPaymentToken(
      _token: string,
      _isSupported: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setVagrosAllowlist(
      _allowlist: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setVagrosCycleToken(
      _cycleToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  Cycles(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
      cycleId: BigNumber;
      totalSupply: BigNumber;
      unitPrice: BigNumber;
      paymentToken: string;
      expiration: BigNumber;
    }
  >;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  buyCycle(
    _cycleId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createCycle(
    _totalSupply: BigNumberish,
    _unitPrice: BigNumberish,
    _paymentToken: string,
    _expiration: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  cycleRewardClaimed(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  cycleRewards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; releaseDate: BigNumber }
  >;

  getCycle(
    _cycleId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VagrosMarketplace.CycleStructOutput>;

  getCycles(
    overrides?: CallOverrides
  ): Promise<VagrosMarketplace.CycleStructOutput[]>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _operator: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isCycleSold(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isSupportedPaymentToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requestReimbursement(
    _cycleId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requestReward(
    _cycleId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setCycleReward(
    _cycleId: BigNumberish,
    _rewardAmount: BigNumberish,
    _releaseDate: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setSupportedPaymentToken(
    _token: string,
    _isSupported: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setVagrosAllowlist(
    _allowlist: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setVagrosCycleToken(
    _cycleToken: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unpause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    Cycles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
        cycleId: BigNumber;
        totalSupply: BigNumber;
        unitPrice: BigNumber;
        paymentToken: string;
        expiration: BigNumber;
      }
    >;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    buyCycle(
      _cycleId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createCycle(
      _totalSupply: BigNumberish,
      _unitPrice: BigNumberish,
      _paymentToken: string,
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cycleRewardClaimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cycleRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; releaseDate: BigNumber }
    >;

    getCycle(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VagrosMarketplace.CycleStructOutput>;

    getCycles(
      overrides?: CallOverrides
    ): Promise<VagrosMarketplace.CycleStructOutput[]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(_operator: string, overrides?: CallOverrides): Promise<void>;

    isCycleSold(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSupportedPaymentToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requestReimbursement(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestReward(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCycleReward(
      _cycleId: BigNumberish,
      _rewardAmount: BigNumberish,
      _releaseDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSupportedPaymentToken(
      _token: string,
      _isSupported: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setVagrosAllowlist(
      _allowlist: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVagrosCycleToken(
      _cycleToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CycleAmountBought(uint256,address,uint256,address)"(
      cycleId?: null,
      buyer?: null,
      amount?: null,
      paymentToken?: null
    ): CycleAmountBoughtEventFilter;
    CycleAmountBought(
      cycleId?: null,
      buyer?: null,
      amount?: null,
      paymentToken?: null
    ): CycleAmountBoughtEventFilter;

    "CycleCreated(uint256,uint256,uint256,address,uint256)"(
      cycleId?: null,
      totalSupply?: null,
      unitPrice?: null,
      paymentToken?: null,
      expiration?: null
    ): CycleCreatedEventFilter;
    CycleCreated(
      cycleId?: null,
      totalSupply?: null,
      unitPrice?: null,
      paymentToken?: null,
      expiration?: null
    ): CycleCreatedEventFilter;

    "CycleSoldOut(uint256)"(id?: null): CycleSoldOutEventFilter;
    CycleSoldOut(id?: null): CycleSoldOutEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    Cycles(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    buyCycle(
      _cycleId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createCycle(
      _totalSupply: BigNumberish,
      _unitPrice: BigNumberish,
      _paymentToken: string,
      _expiration: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    cycleRewardClaimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cycleRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCycle(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCycles(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _operator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isCycleSold(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportedPaymentToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requestReimbursement(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requestReward(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setCycleReward(
      _cycleId: BigNumberish,
      _rewardAmount: BigNumberish,
      _releaseDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setSupportedPaymentToken(
      _token: string,
      _isSupported: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setVagrosAllowlist(
      _allowlist: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setVagrosCycleToken(
      _cycleToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    Cycles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyCycle(
      _cycleId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createCycle(
      _totalSupply: BigNumberish,
      _unitPrice: BigNumberish,
      _paymentToken: string,
      _expiration: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    cycleRewardClaimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cycleRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCycle(
      _cycleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCycles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _operator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isCycleSold(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportedPaymentToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requestReimbursement(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requestReward(
      _cycleId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setCycleReward(
      _cycleId: BigNumberish,
      _rewardAmount: BigNumberish,
      _releaseDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setSupportedPaymentToken(
      _token: string,
      _isSupported: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setVagrosAllowlist(
      _allowlist: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setVagrosCycleToken(
      _cycleToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
