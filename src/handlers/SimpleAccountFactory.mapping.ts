import { AccountCreated } from "../../generated/SimpleAccountFactory/SimpleAccountFactory";
import { AccountEntity } from "../../generated/schema";
import { log } from "@graphprotocol/graph-ts";
import { SimpleAccount as SimpleAccountTemplate } from "../../generated/templates";

export function handleAccountCreated(event: AccountCreated): void {
  log.info("Event AccountCreated: sender={}", [
    event.params.accountAddress.toHexString(),
  ]);

  const id = event.transaction.hash.toHex();
  let entity = new AccountEntity(id);
  entity.userOpHash = "";
  entity.sender = event.params.accountAddress.toHexString();
  entity.save();

  SimpleAccountTemplate.create(event.params.accountAddress);
}
