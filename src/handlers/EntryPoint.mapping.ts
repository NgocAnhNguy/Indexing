import {
  AccountDeployed,
  UserOperationEvent,
  UserOperationRevertReason,
} from "../../generated/EntryPoint/EntryPoint";
import { AccountEntity } from "../../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleAccountDeployed(event: AccountDeployed): void {
  log.info("Event handleAccountDeployed: sender={}", [
    event.params.sender.toHexString(),
  ]);

  const id = event.transaction.hash.toHex();
  let entity = new AccountEntity(id);
  entity.userOpHash = event.params.userOpHash.toString();
  entity.sender = event.params.sender.toHexString();
  entity.save();

  log.info("Event handleAccountDeployed: entity={}", [entity.userOpHash]);
}

// export function handleUserOperationEvent(event: UserOperationEvent): void {
//   log.info("Event userOperationEvent: sender={}, success={}", [
//     event.params.sender.toString(),
//     event.params.success.toString(),
//   ]);

//   const id = event.transaction.hash.toHex();
//   let entity = new TransactionEntity(id);
//   entity.userOpHash = event.params.userOpHash.toString();
//   entity.sender = event.params.sender.toString();
//   entity.rejected = false;
//   entity.save();
// }

// export function handleUserOperationRevertReason(
//   event: UserOperationRevertReason
// ): void {
//   log.info("Event userOperationRevertReason: sender={}", [
//     event.params.sender.toString(),
//   ]);

//   const id = event.transaction.hash.toHex();
//   let entity = new TransactionEntity(id);
//   if (entity != null) {
//     entity.userOpHash = event.params.userOpHash.toString();
//     entity.sender = event.params.sender.toString();
//     entity.rejected = true;
//     entity.save();
//   }
// }
