// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AccountEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccountEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccountEntity", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AccountEntity | null {
    return changetype<AccountEntity | null>(
      store.get_in_block("AccountEntity", id)
    );
  }

  static load(id: string): AccountEntity | null {
    return changetype<AccountEntity | null>(store.get("AccountEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userOpHash(): string {
    let value = this.get("userOpHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set userOpHash(value: string) {
    this.set("userOpHash", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }
}

export class SessionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SessionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SessionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SessionEntity", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SessionEntity | null {
    return changetype<SessionEntity | null>(
      store.get_in_block("SessionEntity", id)
    );
  }

  static load(id: string): SessionEntity | null {
    return changetype<SessionEntity | null>(store.get("SessionEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get sessionUser(): string {
    let value = this.get("sessionUser");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sessionUser(value: string) {
    this.set("sessionUser", Value.fromString(value));
  }

  get startFrom(): BigInt {
    let value = this.get("startFrom");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startFrom(value: BigInt) {
    this.set("startFrom", Value.fromBigInt(value));
  }

  get validUntil(): BigInt {
    let value = this.get("validUntil");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set validUntil(value: BigInt) {
    this.set("validUntil", Value.fromBigInt(value));
  }

  get totalAmount(): BigInt {
    let value = this.get("totalAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalAmount(value: BigInt) {
    this.set("totalAmount", Value.fromBigInt(value));
  }

  get deleted(): boolean {
    let value = this.get("deleted");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set deleted(value: boolean) {
    this.set("deleted", Value.fromBoolean(value));
  }
}

export class TransactionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransactionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransactionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransactionEntity", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TransactionEntity | null {
    return changetype<TransactionEntity | null>(
      store.get_in_block("TransactionEntity", id)
    );
  }

  static load(id: string): TransactionEntity | null {
    return changetype<TransactionEntity | null>(
      store.get("TransactionEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userOpHash(): string {
    let value = this.get("userOpHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set userOpHash(value: string) {
    this.set("userOpHash", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get target(): string {
    let value = this.get("target");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get data(): string {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set data(value: string) {
    this.set("data", Value.fromString(value));
  }

  get rejected(): boolean {
    let value = this.get("rejected");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set rejected(value: boolean) {
    this.set("rejected", Value.fromBoolean(value));
  }
}
