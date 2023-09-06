import {
  Invoked,
  SessionCreated,
  SessionRemoved,
} from "../../generated/templates/SimpleAccount/SimpleAccount";
import { SessionEntity, TransactionEntity } from "../../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleInvoked(event: Invoked): void {
  log.info("Event Invoked: target={}", [event.params.target.toHexString()]);

  const id = event.transaction.hash.toHex();
  var entity = TransactionEntity.load(id);
  if (entity != null) {
    entity.sender = event.transaction.from.toHexString();
    entity.target = event.params.target.toHexString();
    entity.value = event.params.value.toHexString();
    entity.data = event.params.data.toHexString();
    entity.rejected = true;
    entity.userOpHash = "";
    entity.save();
  }
}

export function handleSessionCreated(event: SessionCreated): void {
  log.info("Event SessionCreated: sessionUser={}", [
    event.params.sessionUser.toHexString(),
  ]);
  const id = event.transaction.hash.toHex();
  var entity = new SessionEntity(id);
  entity.sender = "";
  entity.sessionUser = event.params.sessionUser.toHexString();
  entity.startFrom = event.params.startFrom;
  entity.validUntil = event.params.validUntil;
  entity.totalAmount = event.params.totalAmount;
  entity.deleted = false;
  entity.save();
}

export function handleSessionRemoved(event: SessionRemoved): void {
  log.info("Event SessionRemoved: sessionUser={}", [
    event.params.sessionUser.toHexString(),
  ]);
  const id = event.transaction.hash.toHex();
  var entity = new SessionEntity(id);
  entity.sender = "";
  entity.sessionUser = event.params.sessionUser.toHexString();
  entity.startFrom = event.params.startFrom;
  entity.validUntil = event.params.validUntil;
  entity.totalAmount = event.params.totalAmount;
  entity.deleted = true;
  entity.save();
}
