import { AllowedUserGroupsByIntent } from "../authz/types";
import { RpcClient } from "./RpcClient";
export { RpcMultichainClient } from "./Client";
import * as Liststreamkeyitems from "./responses/liststreamkeyitems";

export type StreamKind = "global" | "users" | "project" | "subproject";

// The "stream details" are read-only, so they're only used to define the stream's nature:
interface StreamDetails {
  kind?: StreamKind;
}

export type TxId = string;

export type StreamName = string;
export type StreamTxId = TxId;

export interface Stream {
  name: StreamName;
  createtxid: StreamTxId;
  streamref: string;
  open: boolean;
  details: StreamDetails;
  subscribed: boolean;
  synchronized: boolean;
  items: number;
  confirmed: number;
  keys: number;
  publishers: number;
}

export interface LogEntry {
  creationUnixTs: string;
  issuer: string;
  description?: string;
  action: string;
}

export interface CreateStreamOptions {
  kind: StreamKind;
  name?: string; // random if not given
}

export interface StreamItem {
  key: string;
  value: any;
}

export interface Resource {
  log: LogEntry[];
  permissions: AllowedUserGroupsByIntent;
  data: any;
}

export type StreamKey = string[];

export interface StreamItemPair {
  key: StreamKey;
  resource: Resource;
}

export interface MultichainClient {
  // Create a new stream. If name is set and the stream exists, nothing happens.
  getOrCreateStream(options: CreateStreamOptions);

  // Get a list of all streams:
  streams(): Promise<Stream[]>;

  // Return the most recent values for all keys
  streamItems(streamId: StreamName | StreamTxId): Promise<StreamItem[]>;

  // getinfo Returns general information about this node and blockchain
  // TODO add return types...although they seem rather flexible
  getInfo(): any;

  // Return the most recent values for a specific key
  latestValuesForKey(
    streamId: StreamName | StreamTxId,
    key: string,
    nValues?: number,
  ): Promise<any[]>;

  // Update a stream item, serializing the Js object as hex-string:
  updateStreamItem(
    streamId: StreamName | StreamTxId,
    key: string | string[],
    object: any,
  ): Promise<TxId>;

  // Return all (historic) values of the nValues latest stream items, filtered by a given key:
  getValues(streamName: StreamName, key: string, nValues?: number): Promise<StreamItemPair[]>;

  // Return only the latest values of the nValues latest stream items, filtered by a given key:
  getLatestValues(streamName: StreamName, key: string, nValues?: number): Promise<StreamItemPair[]>;

  // Return a single value for a specific key or throw if not found:
  getValue(streamName: StreamName, key: string): Promise<StreamItemPair>;

  // Update a stream item, serializing the Js object as hex-string:
  setValue(streamName: StreamName, streamKey: StreamKey, object: any): Promise<void>;

  updateValue(
    streamName: StreamName,
    key: string,
    updateCallback: (current: Resource) => Resource,
  ): Promise<void>;

  getRpcClient(): RpcClient;

  v2_readStreamItems(
    streamName: StreamName,
    key: string,
    nValues?: number,
  ): Promise<Liststreamkeyitems.Item[]>;
}
