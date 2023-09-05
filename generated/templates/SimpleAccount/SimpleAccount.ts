// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BatchInvoked extends ethereum.Event {
  get params(): BatchInvoked__Params {
    return new BatchInvoked__Params(this);
  }
}

export class BatchInvoked__Params {
  _event: BatchInvoked;

  constructor(event: BatchInvoked) {
    this._event = event;
  }

  get target(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): Array<Bytes> {
    return this._event.parameters[2].value.toBytesArray();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Invoked extends ethereum.Event {
  get params(): Invoked__Params {
    return new Invoked__Params(this);
  }
}

export class Invoked__Params {
  _event: Invoked;

  constructor(event: Invoked) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class SessionCreated extends ethereum.Event {
  get params(): SessionCreated__Params {
    return new SessionCreated__Params(this);
  }
}

export class SessionCreated__Params {
  _event: SessionCreated;

  constructor(event: SessionCreated) {
    this._event = event;
  }

  get sessionUser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get startFrom(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get validUntil(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SessionRemoved extends ethereum.Event {
  get params(): SessionRemoved__Params {
    return new SessionRemoved__Params(this);
  }
}

export class SessionRemoved__Params {
  _event: SessionRemoved;

  constructor(event: SessionRemoved) {
    this._event = event;
  }

  get sessionUser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get startFrom(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get validUntil(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get spentAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class SimpleAccountInitialized extends ethereum.Event {
  get params(): SimpleAccountInitialized__Params {
    return new SimpleAccountInitialized__Params(this);
  }
}

export class SimpleAccountInitialized__Params {
  _event: SimpleAccountInitialized;

  constructor(event: SimpleAccountInitialized) {
    this._event = event;
  }

  get entryPoint(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SimpleAccount__getSessionResultValue0Struct extends ethereum.Tuple {
  get startFrom(): BigInt {
    return this[0].toBigInt();
  }

  get validUntil(): BigInt {
    return this[1].toBigInt();
  }

  get totalAmount(): BigInt {
    return this[2].toBigInt();
  }

  get spentAmount(): BigInt {
    return this[3].toBigInt();
  }
}

export class SimpleAccount__validateUserOpInputUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class SimpleAccount extends ethereum.SmartContract {
  static bind(address: Address): SimpleAccount {
    return new SimpleAccount("SimpleAccount", address);
  }

  entryPoint(): Address {
    let result = super.call("entryPoint", "entryPoint():(address)", []);

    return result[0].toAddress();
  }

  try_entryPoint(): ethereum.CallResult<Address> {
    let result = super.tryCall("entryPoint", "entryPoint():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDeposit(): BigInt {
    let result = super.call("getDeposit", "getDeposit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getDeposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDeposit", "getDeposit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNonce(): BigInt {
    let result = super.call("getNonce", "getNonce():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getNonce(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNonce", "getNonce():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSession(
    _sessionUser: Address
  ): SimpleAccount__getSessionResultValue0Struct {
    let result = super.call(
      "getSession",
      "getSession(address):((uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(_sessionUser)]
    );

    return changetype<SimpleAccount__getSessionResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSession(
    _sessionUser: Address
  ): ethereum.CallResult<SimpleAccount__getSessionResultValue0Struct> {
    let result = super.tryCall(
      "getSession",
      "getSession(address):((uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(_sessionUser)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<SimpleAccount__getSessionResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validateUserOp(
    userOp: SimpleAccount__validateUserOpInputUserOpStruct,
    userOpHash: Bytes,
    missingAccountFunds: BigInt
  ): BigInt {
    let result = super.call(
      "validateUserOp",
      "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromTuple(userOp),
        ethereum.Value.fromFixedBytes(userOpHash),
        ethereum.Value.fromUnsignedBigInt(missingAccountFunds)
      ]
    );

    return result[0].toBigInt();
  }

  try_validateUserOp(
    userOp: SimpleAccount__validateUserOpInputUserOpStruct,
    userOpHash: Bytes,
    missingAccountFunds: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "validateUserOp",
      "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromTuple(userOp),
        ethereum.Value.fromFixedBytes(userOpHash),
        ethereum.Value.fromUnsignedBigInt(missingAccountFunds)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get anEntryPoint(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddDepositCall extends ethereum.Call {
  get inputs(): AddDepositCall__Inputs {
    return new AddDepositCall__Inputs(this);
  }

  get outputs(): AddDepositCall__Outputs {
    return new AddDepositCall__Outputs(this);
  }
}

export class AddDepositCall__Inputs {
  _call: AddDepositCall;

  constructor(call: AddDepositCall) {
    this._call = call;
  }
}

export class AddDepositCall__Outputs {
  _call: AddDepositCall;

  constructor(call: AddDepositCall) {
    this._call = call;
  }
}

export class AddSessionCall extends ethereum.Call {
  get inputs(): AddSessionCall__Inputs {
    return new AddSessionCall__Inputs(this);
  }

  get outputs(): AddSessionCall__Outputs {
    return new AddSessionCall__Outputs(this);
  }
}

export class AddSessionCall__Inputs {
  _call: AddSessionCall;

  constructor(call: AddSessionCall) {
    this._call = call;
  }

  get sessionUser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get startFrom(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get validUntil(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get totalAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AddSessionCall__Outputs {
  _call: AddSessionCall;

  constructor(call: AddSessionCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get dest(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get func(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class ExecuteBatchCall extends ethereum.Call {
  get inputs(): ExecuteBatchCall__Inputs {
    return new ExecuteBatchCall__Inputs(this);
  }

  get outputs(): ExecuteBatchCall__Outputs {
    return new ExecuteBatchCall__Outputs(this);
  }
}

export class ExecuteBatchCall__Inputs {
  _call: ExecuteBatchCall;

  constructor(call: ExecuteBatchCall) {
    this._call = call;
  }

  get dest(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get value(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get func(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class ExecuteBatchCall__Outputs {
  _call: ExecuteBatchCall;

  constructor(call: ExecuteBatchCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get anOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveSessionCall extends ethereum.Call {
  get inputs(): RemoveSessionCall__Inputs {
    return new RemoveSessionCall__Inputs(this);
  }

  get outputs(): RemoveSessionCall__Outputs {
    return new RemoveSessionCall__Outputs(this);
  }
}

export class RemoveSessionCall__Inputs {
  _call: RemoveSessionCall;

  constructor(call: RemoveSessionCall) {
    this._call = call;
  }

  get sessionUser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveSessionCall__Outputs {
  _call: RemoveSessionCall;

  constructor(call: RemoveSessionCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class ValidateUserOpCall extends ethereum.Call {
  get inputs(): ValidateUserOpCall__Inputs {
    return new ValidateUserOpCall__Inputs(this);
  }

  get outputs(): ValidateUserOpCall__Outputs {
    return new ValidateUserOpCall__Outputs(this);
  }
}

export class ValidateUserOpCall__Inputs {
  _call: ValidateUserOpCall;

  constructor(call: ValidateUserOpCall) {
    this._call = call;
  }

  get userOp(): ValidateUserOpCallUserOpStruct {
    return changetype<ValidateUserOpCallUserOpStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get userOpHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get missingAccountFunds(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ValidateUserOpCall__Outputs {
  _call: ValidateUserOpCall;

  constructor(call: ValidateUserOpCall) {
    this._call = call;
  }

  get validationData(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ValidateUserOpCallUserOpStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get verificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes();
  }

  get signature(): Bytes {
    return this[10].toBytes();
  }
}

export class WithdrawDepositToCall extends ethereum.Call {
  get inputs(): WithdrawDepositToCall__Inputs {
    return new WithdrawDepositToCall__Inputs(this);
  }

  get outputs(): WithdrawDepositToCall__Outputs {
    return new WithdrawDepositToCall__Outputs(this);
  }
}

export class WithdrawDepositToCall__Inputs {
  _call: WithdrawDepositToCall;

  constructor(call: WithdrawDepositToCall) {
    this._call = call;
  }

  get withdrawAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawDepositToCall__Outputs {
  _call: WithdrawDepositToCall;

  constructor(call: WithdrawDepositToCall) {
    this._call = call;
  }
}