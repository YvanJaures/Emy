
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Community_member
 * 
 */
export type Community_member = $Result.DefaultSelection<Prisma.$Community_memberPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Prize
 * 
 */
export type Prize = $Result.DefaultSelection<Prisma.$PrizePayload>
/**
 * Model Prize_sponsor
 * 
 */
export type Prize_sponsor = $Result.DefaultSelection<Prisma.$Prize_sponsorPayload>
/**
 * Model Sponsor
 * 
 */
export type Sponsor = $Result.DefaultSelection<Prisma.$SponsorPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Team_member
 * 
 */
export type Team_member = $Result.DefaultSelection<Prisma.$Team_memberPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community_member`: Exposes CRUD operations for the **Community_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Community_members
    * const community_members = await prisma.community_member.findMany()
    * ```
    */
  get community_member(): Prisma.Community_memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prize`: Exposes CRUD operations for the **Prize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prizes
    * const prizes = await prisma.prize.findMany()
    * ```
    */
  get prize(): Prisma.PrizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prize_sponsor`: Exposes CRUD operations for the **Prize_sponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prize_sponsors
    * const prize_sponsors = await prisma.prize_sponsor.findMany()
    * ```
    */
  get prize_sponsor(): Prisma.Prize_sponsorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsor`: Exposes CRUD operations for the **Sponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsors
    * const sponsors = await prisma.sponsor.findMany()
    * ```
    */
  get sponsor(): Prisma.SponsorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **Team_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_members
    * const team_members = await prisma.team_member.findMany()
    * ```
    */
  get team_member(): Prisma.Team_memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Community: 'Community',
    Community_member: 'Community_member',
    Employee: 'Employee',
    Manager: 'Manager',
    Member: 'Member',
    Player: 'Player',
    Prize: 'Prize',
    Prize_sponsor: 'Prize_sponsor',
    Sponsor: 'Sponsor',
    Team: 'Team',
    Team_member: 'Team_member',
    Tournament: 'Tournament',
    Type: 'Type'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "community" | "community_member" | "employee" | "manager" | "member" | "player" | "prize" | "prize_sponsor" | "sponsor" | "team" | "team_member" | "tournament" | "type"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Community_member: {
        payload: Prisma.$Community_memberPayload<ExtArgs>
        fields: Prisma.Community_memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Community_memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Community_memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          findFirst: {
            args: Prisma.Community_memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Community_memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          findMany: {
            args: Prisma.Community_memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>[]
          }
          create: {
            args: Prisma.Community_memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          createMany: {
            args: Prisma.Community_memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Community_memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          update: {
            args: Prisma.Community_memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          deleteMany: {
            args: Prisma.Community_memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Community_memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Community_memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Community_memberPayload>
          }
          aggregate: {
            args: Prisma.Community_memberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity_member>
          }
          groupBy: {
            args: Prisma.Community_memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<Community_memberGroupByOutputType>[]
          }
          count: {
            args: Prisma.Community_memberCountArgs<ExtArgs>
            result: $Utils.Optional<Community_memberCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Prize: {
        payload: Prisma.$PrizePayload<ExtArgs>
        fields: Prisma.PrizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          findFirst: {
            args: Prisma.PrizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          findMany: {
            args: Prisma.PrizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>[]
          }
          create: {
            args: Prisma.PrizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          createMany: {
            args: Prisma.PrizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          update: {
            args: Prisma.PrizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          deleteMany: {
            args: Prisma.PrizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          aggregate: {
            args: Prisma.PrizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrize>
          }
          groupBy: {
            args: Prisma.PrizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrizeCountArgs<ExtArgs>
            result: $Utils.Optional<PrizeCountAggregateOutputType> | number
          }
        }
      }
      Prize_sponsor: {
        payload: Prisma.$Prize_sponsorPayload<ExtArgs>
        fields: Prisma.Prize_sponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Prize_sponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Prize_sponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          findFirst: {
            args: Prisma.Prize_sponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Prize_sponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          findMany: {
            args: Prisma.Prize_sponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>[]
          }
          create: {
            args: Prisma.Prize_sponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          createMany: {
            args: Prisma.Prize_sponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Prize_sponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          update: {
            args: Prisma.Prize_sponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          deleteMany: {
            args: Prisma.Prize_sponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Prize_sponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Prize_sponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prize_sponsorPayload>
          }
          aggregate: {
            args: Prisma.Prize_sponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrize_sponsor>
          }
          groupBy: {
            args: Prisma.Prize_sponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prize_sponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.Prize_sponsorCountArgs<ExtArgs>
            result: $Utils.Optional<Prize_sponsorCountAggregateOutputType> | number
          }
        }
      }
      Sponsor: {
        payload: Prisma.$SponsorPayload<ExtArgs>
        fields: Prisma.SponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findFirst: {
            args: Prisma.SponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findMany: {
            args: Prisma.SponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          create: {
            args: Prisma.SponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          createMany: {
            args: Prisma.SponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          update: {
            args: Prisma.SponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          deleteMany: {
            args: Prisma.SponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          aggregate: {
            args: Prisma.SponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsor>
          }
          groupBy: {
            args: Prisma.SponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Team_member: {
        payload: Prisma.$Team_memberPayload<ExtArgs>
        fields: Prisma.Team_memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Team_memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Team_memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          findFirst: {
            args: Prisma.Team_memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Team_memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          findMany: {
            args: Prisma.Team_memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>[]
          }
          create: {
            args: Prisma.Team_memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          createMany: {
            args: Prisma.Team_memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Team_memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          update: {
            args: Prisma.Team_memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          deleteMany: {
            args: Prisma.Team_memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Team_memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Team_memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Team_memberPayload>
          }
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_member>
          }
          groupBy: {
            args: Prisma.Team_memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_memberGroupByOutputType>[]
          }
          count: {
            args: Prisma.Team_memberCountArgs<ExtArgs>
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    community?: CommunityOmit
    community_member?: Community_memberOmit
    employee?: EmployeeOmit
    manager?: ManagerOmit
    member?: MemberOmit
    player?: PlayerOmit
    prize?: PrizeOmit
    prize_sponsor?: Prize_sponsorOmit
    sponsor?: SponsorOmit
    team?: TeamOmit
    team_member?: Team_memberOmit
    tournament?: TournamentOmit
    type?: TypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    Tournament: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | AdminCountOutputTypeCountTournamentArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    Admin: number
    Community_member: number
    Tournament: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | CommunityCountOutputTypeCountAdminArgs
    Community_member?: boolean | CommunityCountOutputTypeCountCommunity_memberArgs
    Tournament?: boolean | CommunityCountOutputTypeCountTournamentArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountCommunity_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Community_memberWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    Community: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | ManagerCountOutputTypeCountCommunityArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountCommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    Community_member: number
    Player: number
    Team: number
    Team_member: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community_member?: boolean | MemberCountOutputTypeCountCommunity_memberArgs
    Player?: boolean | MemberCountOutputTypeCountPlayerArgs
    Team?: boolean | MemberCountOutputTypeCountTeamArgs
    Team_member?: boolean | MemberCountOutputTypeCountTeam_memberArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCommunity_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Community_memberWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountTeam_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Team_memberWhereInput
  }


  /**
   * Count Type PrizeCountOutputType
   */

  export type PrizeCountOutputType = {
    Prize_sponsor: number
  }

  export type PrizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize_sponsor?: boolean | PrizeCountOutputTypeCountPrize_sponsorArgs
  }

  // Custom InputTypes
  /**
   * PrizeCountOutputType without action
   */
  export type PrizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeCountOutputType
     */
    select?: PrizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrizeCountOutputType without action
   */
  export type PrizeCountOutputTypeCountPrize_sponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prize_sponsorWhereInput
  }


  /**
   * Count Type SponsorCountOutputType
   */

  export type SponsorCountOutputType = {
    Prize_sponsor: number
  }

  export type SponsorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize_sponsor?: boolean | SponsorCountOutputTypeCountPrize_sponsorArgs
  }

  // Custom InputTypes
  /**
   * SponsorCountOutputType without action
   */
  export type SponsorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorCountOutputType
     */
    select?: SponsorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SponsorCountOutputType without action
   */
  export type SponsorCountOutputTypeCountPrize_sponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prize_sponsorWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    Team_member: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Team_member?: boolean | TeamCountOutputTypeCountTeam_memberArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeam_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Team_memberWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    Player: number
    Prize: number
    Team: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Player?: boolean | TournamentCountOutputTypeCountPlayerArgs
    Prize?: boolean | TournamentCountOutputTypeCountPrizeArgs
    Team?: boolean | TournamentCountOutputTypeCountTeamArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountPrizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrizeWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    Prize: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize?: boolean | TypeCountOutputTypeCountPrizeArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountPrizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrizeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id_admin: number | null
    id_community: number | null
  }

  export type AdminSumAggregateOutputType = {
    id_admin: number | null
    id_community: number | null
  }

  export type AdminMinAggregateOutputType = {
    id_admin: number | null
    id_community: number | null
    user_name: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id_admin: number | null
    id_community: number | null
    user_name: string | null
  }

  export type AdminCountAggregateOutputType = {
    id_admin: number
    id_community: number
    user_name: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id_admin?: true
    id_community?: true
  }

  export type AdminSumAggregateInputType = {
    id_admin?: true
    id_community?: true
  }

  export type AdminMinAggregateInputType = {
    id_admin?: true
    id_community?: true
    user_name?: true
  }

  export type AdminMaxAggregateInputType = {
    id_admin?: true
    id_community?: true
    user_name?: true
  }

  export type AdminCountAggregateInputType = {
    id_admin?: true
    id_community?: true
    user_name?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id_admin: number
    id_community: number | null
    user_name: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    id_community?: boolean
    user_name?: boolean
    Community?: boolean | Admin$CommunityArgs<ExtArgs>
    Member?: boolean | Admin$MemberArgs<ExtArgs>
    Tournament?: boolean | Admin$TournamentArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id_admin?: boolean
    id_community?: boolean
    user_name?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admin" | "id_community" | "user_name", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | Admin$CommunityArgs<ExtArgs>
    Member?: boolean | Admin$MemberArgs<ExtArgs>
    Tournament?: boolean | Admin$TournamentArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      Community: Prisma.$CommunityPayload<ExtArgs> | null
      Member: Prisma.$MemberPayload<ExtArgs> | null
      Tournament: Prisma.$TournamentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_admin: number
      id_community: number | null
      user_name: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.findMany({ select: { id_admin: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Community<T extends Admin$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Admin$CommunityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Member<T extends Admin$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Admin$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Tournament<T extends Admin$TournamentArgs<ExtArgs> = {}>(args?: Subset<T, Admin$TournamentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id_admin: FieldRef<"Admin", 'Int'>
    readonly id_community: FieldRef<"Admin", 'Int'>
    readonly user_name: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data?: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.Community
   */
  export type Admin$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Admin.Member
   */
  export type Admin$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Admin.Tournament
   */
  export type Admin$TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id_community: number | null
    members: number | null
    id_manager: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id_community: number | null
    members: number | null
    id_manager: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id_community: number | null
    name: string | null
    details: string | null
    avatar: string | null
    members: number | null
    location: string | null
    id_manager: number | null
    privacy: boolean | null
  }

  export type CommunityMaxAggregateOutputType = {
    id_community: number | null
    name: string | null
    details: string | null
    avatar: string | null
    members: number | null
    location: string | null
    id_manager: number | null
    privacy: boolean | null
  }

  export type CommunityCountAggregateOutputType = {
    id_community: number
    name: number
    details: number
    avatar: number
    members: number
    location: number
    id_manager: number
    privacy: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id_community?: true
    members?: true
    id_manager?: true
  }

  export type CommunitySumAggregateInputType = {
    id_community?: true
    members?: true
    id_manager?: true
  }

  export type CommunityMinAggregateInputType = {
    id_community?: true
    name?: true
    details?: true
    avatar?: true
    members?: true
    location?: true
    id_manager?: true
    privacy?: true
  }

  export type CommunityMaxAggregateInputType = {
    id_community?: true
    name?: true
    details?: true
    avatar?: true
    members?: true
    location?: true
    id_manager?: true
    privacy?: true
  }

  export type CommunityCountAggregateInputType = {
    id_community?: true
    name?: true
    details?: true
    avatar?: true
    members?: true
    location?: true
    id_manager?: true
    privacy?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id_community: number
    name: string | null
    details: string | null
    avatar: string | null
    members: number | null
    location: string | null
    id_manager: number | null
    privacy: boolean | null
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_community?: boolean
    name?: boolean
    details?: boolean
    avatar?: boolean
    members?: boolean
    location?: boolean
    id_manager?: boolean
    privacy?: boolean
    Admin?: boolean | Community$AdminArgs<ExtArgs>
    Manager?: boolean | Community$ManagerArgs<ExtArgs>
    Community_member?: boolean | Community$Community_memberArgs<ExtArgs>
    Tournament?: boolean | Community$TournamentArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>



  export type CommunitySelectScalar = {
    id_community?: boolean
    name?: boolean
    details?: boolean
    avatar?: boolean
    members?: boolean
    location?: boolean
    id_manager?: boolean
    privacy?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_community" | "name" | "details" | "avatar" | "members" | "location" | "id_manager" | "privacy", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | Community$AdminArgs<ExtArgs>
    Manager?: boolean | Community$ManagerArgs<ExtArgs>
    Community_member?: boolean | Community$Community_memberArgs<ExtArgs>
    Tournament?: boolean | Community$TournamentArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs>[]
      Manager: Prisma.$ManagerPayload<ExtArgs> | null
      Community_member: Prisma.$Community_memberPayload<ExtArgs>[]
      Tournament: Prisma.$TournamentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_community: number
      name: string | null
      details: string | null
      avatar: string | null
      members: number | null
      location: string | null
      id_manager: number | null
      privacy: boolean | null
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id_community`
     * const communityWithId_communityOnly = await prisma.community.findMany({ select: { id_community: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends Community$AdminArgs<ExtArgs> = {}>(args?: Subset<T, Community$AdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Manager<T extends Community$ManagerArgs<ExtArgs> = {}>(args?: Subset<T, Community$ManagerArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Community_member<T extends Community$Community_memberArgs<ExtArgs> = {}>(args?: Subset<T, Community$Community_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tournament<T extends Community$TournamentArgs<ExtArgs> = {}>(args?: Subset<T, Community$TournamentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id_community: FieldRef<"Community", 'Int'>
    readonly name: FieldRef<"Community", 'String'>
    readonly details: FieldRef<"Community", 'String'>
    readonly avatar: FieldRef<"Community", 'String'>
    readonly members: FieldRef<"Community", 'Int'>
    readonly location: FieldRef<"Community", 'String'>
    readonly id_manager: FieldRef<"Community", 'Int'>
    readonly privacy: FieldRef<"Community", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data?: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.Admin
   */
  export type Community$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Community.Manager
   */
  export type Community$ManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    where?: ManagerWhereInput
  }

  /**
   * Community.Community_member
   */
  export type Community$Community_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    where?: Community_memberWhereInput
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    cursor?: Community_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Community_memberScalarFieldEnum | Community_memberScalarFieldEnum[]
  }

  /**
   * Community.Tournament
   */
  export type Community$TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model Community_member
   */

  export type AggregateCommunity_member = {
    _count: Community_memberCountAggregateOutputType | null
    _avg: Community_memberAvgAggregateOutputType | null
    _sum: Community_memberSumAggregateOutputType | null
    _min: Community_memberMinAggregateOutputType | null
    _max: Community_memberMaxAggregateOutputType | null
  }

  export type Community_memberAvgAggregateOutputType = {
    id_co_member: number | null
    id_community: number | null
  }

  export type Community_memberSumAggregateOutputType = {
    id_co_member: number | null
    id_community: number | null
  }

  export type Community_memberMinAggregateOutputType = {
    id_co_member: number | null
    join_date: Date | null
    id_community: number | null
    user_name: string | null
  }

  export type Community_memberMaxAggregateOutputType = {
    id_co_member: number | null
    join_date: Date | null
    id_community: number | null
    user_name: string | null
  }

  export type Community_memberCountAggregateOutputType = {
    id_co_member: number
    join_date: number
    id_community: number
    user_name: number
    _all: number
  }


  export type Community_memberAvgAggregateInputType = {
    id_co_member?: true
    id_community?: true
  }

  export type Community_memberSumAggregateInputType = {
    id_co_member?: true
    id_community?: true
  }

  export type Community_memberMinAggregateInputType = {
    id_co_member?: true
    join_date?: true
    id_community?: true
    user_name?: true
  }

  export type Community_memberMaxAggregateInputType = {
    id_co_member?: true
    join_date?: true
    id_community?: true
    user_name?: true
  }

  export type Community_memberCountAggregateInputType = {
    id_co_member?: true
    join_date?: true
    id_community?: true
    user_name?: true
    _all?: true
  }

  export type Community_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community_member to aggregate.
     */
    where?: Community_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Community_members to fetch.
     */
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Community_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Community_members
    **/
    _count?: true | Community_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Community_memberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Community_memberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Community_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Community_memberMaxAggregateInputType
  }

  export type GetCommunity_memberAggregateType<T extends Community_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity_member[P]>
      : GetScalarType<T[P], AggregateCommunity_member[P]>
  }




  export type Community_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Community_memberWhereInput
    orderBy?: Community_memberOrderByWithAggregationInput | Community_memberOrderByWithAggregationInput[]
    by: Community_memberScalarFieldEnum[] | Community_memberScalarFieldEnum
    having?: Community_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Community_memberCountAggregateInputType | true
    _avg?: Community_memberAvgAggregateInputType
    _sum?: Community_memberSumAggregateInputType
    _min?: Community_memberMinAggregateInputType
    _max?: Community_memberMaxAggregateInputType
  }

  export type Community_memberGroupByOutputType = {
    id_co_member: number
    join_date: Date | null
    id_community: number | null
    user_name: string | null
    _count: Community_memberCountAggregateOutputType | null
    _avg: Community_memberAvgAggregateOutputType | null
    _sum: Community_memberSumAggregateOutputType | null
    _min: Community_memberMinAggregateOutputType | null
    _max: Community_memberMaxAggregateOutputType | null
  }

  type GetCommunity_memberGroupByPayload<T extends Community_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Community_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Community_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Community_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Community_memberGroupByOutputType[P]>
        }
      >
    >


  export type Community_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_co_member?: boolean
    join_date?: boolean
    id_community?: boolean
    user_name?: boolean
    Community?: boolean | Community_member$CommunityArgs<ExtArgs>
    Member?: boolean | Community_member$MemberArgs<ExtArgs>
  }, ExtArgs["result"]["community_member"]>



  export type Community_memberSelectScalar = {
    id_co_member?: boolean
    join_date?: boolean
    id_community?: boolean
    user_name?: boolean
  }

  export type Community_memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_co_member" | "join_date" | "id_community" | "user_name", ExtArgs["result"]["community_member"]>
  export type Community_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | Community_member$CommunityArgs<ExtArgs>
    Member?: boolean | Community_member$MemberArgs<ExtArgs>
  }

  export type $Community_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community_member"
    objects: {
      Community: Prisma.$CommunityPayload<ExtArgs> | null
      Member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_co_member: number
      join_date: Date | null
      id_community: number | null
      user_name: string | null
    }, ExtArgs["result"]["community_member"]>
    composites: {}
  }

  type Community_memberGetPayload<S extends boolean | null | undefined | Community_memberDefaultArgs> = $Result.GetResult<Prisma.$Community_memberPayload, S>

  type Community_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Community_memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Community_memberCountAggregateInputType | true
    }

  export interface Community_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community_member'], meta: { name: 'Community_member' } }
    /**
     * Find zero or one Community_member that matches the filter.
     * @param {Community_memberFindUniqueArgs} args - Arguments to find a Community_member
     * @example
     * // Get one Community_member
     * const community_member = await prisma.community_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Community_memberFindUniqueArgs>(args: SelectSubset<T, Community_memberFindUniqueArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community_member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Community_memberFindUniqueOrThrowArgs} args - Arguments to find a Community_member
     * @example
     * // Get one Community_member
     * const community_member = await prisma.community_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Community_memberFindUniqueOrThrowArgs>(args: SelectSubset<T, Community_memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberFindFirstArgs} args - Arguments to find a Community_member
     * @example
     * // Get one Community_member
     * const community_member = await prisma.community_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Community_memberFindFirstArgs>(args?: SelectSubset<T, Community_memberFindFirstArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberFindFirstOrThrowArgs} args - Arguments to find a Community_member
     * @example
     * // Get one Community_member
     * const community_member = await prisma.community_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Community_memberFindFirstOrThrowArgs>(args?: SelectSubset<T, Community_memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Community_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Community_members
     * const community_members = await prisma.community_member.findMany()
     * 
     * // Get first 10 Community_members
     * const community_members = await prisma.community_member.findMany({ take: 10 })
     * 
     * // Only select the `id_co_member`
     * const community_memberWithId_co_memberOnly = await prisma.community_member.findMany({ select: { id_co_member: true } })
     * 
     */
    findMany<T extends Community_memberFindManyArgs>(args?: SelectSubset<T, Community_memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community_member.
     * @param {Community_memberCreateArgs} args - Arguments to create a Community_member.
     * @example
     * // Create one Community_member
     * const Community_member = await prisma.community_member.create({
     *   data: {
     *     // ... data to create a Community_member
     *   }
     * })
     * 
     */
    create<T extends Community_memberCreateArgs>(args: SelectSubset<T, Community_memberCreateArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Community_members.
     * @param {Community_memberCreateManyArgs} args - Arguments to create many Community_members.
     * @example
     * // Create many Community_members
     * const community_member = await prisma.community_member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Community_memberCreateManyArgs>(args?: SelectSubset<T, Community_memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community_member.
     * @param {Community_memberDeleteArgs} args - Arguments to delete one Community_member.
     * @example
     * // Delete one Community_member
     * const Community_member = await prisma.community_member.delete({
     *   where: {
     *     // ... filter to delete one Community_member
     *   }
     * })
     * 
     */
    delete<T extends Community_memberDeleteArgs>(args: SelectSubset<T, Community_memberDeleteArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community_member.
     * @param {Community_memberUpdateArgs} args - Arguments to update one Community_member.
     * @example
     * // Update one Community_member
     * const community_member = await prisma.community_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Community_memberUpdateArgs>(args: SelectSubset<T, Community_memberUpdateArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Community_members.
     * @param {Community_memberDeleteManyArgs} args - Arguments to filter Community_members to delete.
     * @example
     * // Delete a few Community_members
     * const { count } = await prisma.community_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Community_memberDeleteManyArgs>(args?: SelectSubset<T, Community_memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Community_members
     * const community_member = await prisma.community_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Community_memberUpdateManyArgs>(args: SelectSubset<T, Community_memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community_member.
     * @param {Community_memberUpsertArgs} args - Arguments to update or create a Community_member.
     * @example
     * // Update or create a Community_member
     * const community_member = await prisma.community_member.upsert({
     *   create: {
     *     // ... data to create a Community_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community_member we want to update
     *   }
     * })
     */
    upsert<T extends Community_memberUpsertArgs>(args: SelectSubset<T, Community_memberUpsertArgs<ExtArgs>>): Prisma__Community_memberClient<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberCountArgs} args - Arguments to filter Community_members to count.
     * @example
     * // Count the number of Community_members
     * const count = await prisma.community_member.count({
     *   where: {
     *     // ... the filter for the Community_members we want to count
     *   }
     * })
    **/
    count<T extends Community_memberCountArgs>(
      args?: Subset<T, Community_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Community_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Community_memberAggregateArgs>(args: Subset<T, Community_memberAggregateArgs>): Prisma.PrismaPromise<GetCommunity_memberAggregateType<T>>

    /**
     * Group by Community_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Community_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Community_memberGroupByArgs['orderBy'] }
        : { orderBy?: Community_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Community_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunity_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community_member model
   */
  readonly fields: Community_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Community_memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Community<T extends Community_member$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Community_member$CommunityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Member<T extends Community_member$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Community_member$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community_member model
   */
  interface Community_memberFieldRefs {
    readonly id_co_member: FieldRef<"Community_member", 'Int'>
    readonly join_date: FieldRef<"Community_member", 'DateTime'>
    readonly id_community: FieldRef<"Community_member", 'Int'>
    readonly user_name: FieldRef<"Community_member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Community_member findUnique
   */
  export type Community_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter, which Community_member to fetch.
     */
    where: Community_memberWhereUniqueInput
  }

  /**
   * Community_member findUniqueOrThrow
   */
  export type Community_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter, which Community_member to fetch.
     */
    where: Community_memberWhereUniqueInput
  }

  /**
   * Community_member findFirst
   */
  export type Community_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter, which Community_member to fetch.
     */
    where?: Community_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Community_members to fetch.
     */
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Community_members.
     */
    cursor?: Community_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Community_members.
     */
    distinct?: Community_memberScalarFieldEnum | Community_memberScalarFieldEnum[]
  }

  /**
   * Community_member findFirstOrThrow
   */
  export type Community_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter, which Community_member to fetch.
     */
    where?: Community_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Community_members to fetch.
     */
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Community_members.
     */
    cursor?: Community_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Community_members.
     */
    distinct?: Community_memberScalarFieldEnum | Community_memberScalarFieldEnum[]
  }

  /**
   * Community_member findMany
   */
  export type Community_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter, which Community_members to fetch.
     */
    where?: Community_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Community_members to fetch.
     */
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Community_members.
     */
    cursor?: Community_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Community_members.
     */
    skip?: number
    distinct?: Community_memberScalarFieldEnum | Community_memberScalarFieldEnum[]
  }

  /**
   * Community_member create
   */
  export type Community_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * The data needed to create a Community_member.
     */
    data?: XOR<Community_memberCreateInput, Community_memberUncheckedCreateInput>
  }

  /**
   * Community_member createMany
   */
  export type Community_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Community_members.
     */
    data: Community_memberCreateManyInput | Community_memberCreateManyInput[]
  }

  /**
   * Community_member update
   */
  export type Community_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * The data needed to update a Community_member.
     */
    data: XOR<Community_memberUpdateInput, Community_memberUncheckedUpdateInput>
    /**
     * Choose, which Community_member to update.
     */
    where: Community_memberWhereUniqueInput
  }

  /**
   * Community_member updateMany
   */
  export type Community_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Community_members.
     */
    data: XOR<Community_memberUpdateManyMutationInput, Community_memberUncheckedUpdateManyInput>
    /**
     * Filter which Community_members to update
     */
    where?: Community_memberWhereInput
    /**
     * Limit how many Community_members to update.
     */
    limit?: number
  }

  /**
   * Community_member upsert
   */
  export type Community_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * The filter to search for the Community_member to update in case it exists.
     */
    where: Community_memberWhereUniqueInput
    /**
     * In case the Community_member found by the `where` argument doesn't exist, create a new Community_member with this data.
     */
    create: XOR<Community_memberCreateInput, Community_memberUncheckedCreateInput>
    /**
     * In case the Community_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Community_memberUpdateInput, Community_memberUncheckedUpdateInput>
  }

  /**
   * Community_member delete
   */
  export type Community_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    /**
     * Filter which Community_member to delete.
     */
    where: Community_memberWhereUniqueInput
  }

  /**
   * Community_member deleteMany
   */
  export type Community_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community_members to delete
     */
    where?: Community_memberWhereInput
    /**
     * Limit how many Community_members to delete.
     */
    limit?: number
  }

  /**
   * Community_member.Community
   */
  export type Community_member$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Community_member.Member
   */
  export type Community_member$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Community_member without action
   */
  export type Community_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    user_name: string | null
    retraite: boolean | null
  }

  export type EmployeeMaxAggregateOutputType = {
    user_name: string | null
    retraite: boolean | null
  }

  export type EmployeeCountAggregateOutputType = {
    user_name: number
    retraite: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    user_name?: true
    retraite?: true
  }

  export type EmployeeMaxAggregateInputType = {
    user_name?: true
    retraite?: true
  }

  export type EmployeeCountAggregateInputType = {
    user_name?: true
    retraite?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    user_name: string
    retraite: boolean | null
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    retraite?: boolean
    Member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    user_name?: boolean
    retraite?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_name" | "retraite", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      Member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_name: string
      retraite: boolean | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `user_name`
     * const employeeWithUser_nameOnly = await prisma.employee.findMany({ select: { user_name: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly user_name: FieldRef<"Employee", 'String'>
    readonly retraite: FieldRef<"Employee", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id_manager: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id_manager: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id_manager: number | null
    password: string | null
  }

  export type ManagerMaxAggregateOutputType = {
    id_manager: number | null
    password: string | null
  }

  export type ManagerCountAggregateOutputType = {
    id_manager: number
    password: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id_manager?: true
  }

  export type ManagerSumAggregateInputType = {
    id_manager?: true
  }

  export type ManagerMinAggregateInputType = {
    id_manager?: true
    password?: true
  }

  export type ManagerMaxAggregateInputType = {
    id_manager?: true
    password?: true
  }

  export type ManagerCountAggregateInputType = {
    id_manager?: true
    password?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id_manager: number
    password: string | null
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_manager?: boolean
    password?: boolean
    Community?: boolean | Manager$CommunityArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>



  export type ManagerSelectScalar = {
    id_manager?: boolean
    password?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_manager" | "password", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Community?: boolean | Manager$CommunityArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      Community: Prisma.$CommunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_manager: number
      password: string | null
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id_manager`
     * const managerWithId_managerOnly = await prisma.manager.findMany({ select: { id_manager: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Community<T extends Manager$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Manager$CommunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manager model
   */
  interface ManagerFieldRefs {
    readonly id_manager: FieldRef<"Manager", 'Int'>
    readonly password: FieldRef<"Manager", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data?: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.Community
   */
  export type Manager$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    user_name: string | null
    name: string | null
    surname: string | null
    address: string | null
    birth_date: Date | null
    country: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    password: string | null
  }

  export type MemberMaxAggregateOutputType = {
    user_name: string | null
    name: string | null
    surname: string | null
    address: string | null
    birth_date: Date | null
    country: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    password: string | null
  }

  export type MemberCountAggregateOutputType = {
    user_name: number
    name: number
    surname: number
    address: number
    birth_date: number
    country: number
    email: number
    phone: number
    avatar: number
    password: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    user_name?: true
    name?: true
    surname?: true
    address?: true
    birth_date?: true
    country?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
  }

  export type MemberMaxAggregateInputType = {
    user_name?: true
    name?: true
    surname?: true
    address?: true
    birth_date?: true
    country?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
  }

  export type MemberCountAggregateInputType = {
    user_name?: true
    name?: true
    surname?: true
    address?: true
    birth_date?: true
    country?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    user_name: string
    name: string | null
    surname: string | null
    address: string | null
    birth_date: Date | null
    country: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    password: string | null
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    name?: boolean
    surname?: boolean
    address?: boolean
    birth_date?: boolean
    country?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
    Admin?: boolean | Member$AdminArgs<ExtArgs>
    Community_member?: boolean | Member$Community_memberArgs<ExtArgs>
    Employee?: boolean | Member$EmployeeArgs<ExtArgs>
    Player?: boolean | Member$PlayerArgs<ExtArgs>
    Sponsor?: boolean | Member$SponsorArgs<ExtArgs>
    Team?: boolean | Member$TeamArgs<ExtArgs>
    Team_member?: boolean | Member$Team_memberArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    user_name?: boolean
    name?: boolean
    surname?: boolean
    address?: boolean
    birth_date?: boolean
    country?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_name" | "name" | "surname" | "address" | "birth_date" | "country" | "email" | "phone" | "avatar" | "password", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | Member$AdminArgs<ExtArgs>
    Community_member?: boolean | Member$Community_memberArgs<ExtArgs>
    Employee?: boolean | Member$EmployeeArgs<ExtArgs>
    Player?: boolean | Member$PlayerArgs<ExtArgs>
    Sponsor?: boolean | Member$SponsorArgs<ExtArgs>
    Team?: boolean | Member$TeamArgs<ExtArgs>
    Team_member?: boolean | Member$Team_memberArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      Community_member: Prisma.$Community_memberPayload<ExtArgs>[]
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      Player: Prisma.$PlayerPayload<ExtArgs>[]
      Sponsor: Prisma.$SponsorPayload<ExtArgs> | null
      Team: Prisma.$TeamPayload<ExtArgs>[]
      Team_member: Prisma.$Team_memberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_name: string
      name: string | null
      surname: string | null
      address: string | null
      birth_date: Date | null
      country: string | null
      email: string | null
      phone: string | null
      avatar: string | null
      password: string | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `user_name`
     * const memberWithUser_nameOnly = await prisma.member.findMany({ select: { user_name: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends Member$AdminArgs<ExtArgs> = {}>(args?: Subset<T, Member$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Community_member<T extends Member$Community_memberArgs<ExtArgs> = {}>(args?: Subset<T, Member$Community_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Community_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Employee<T extends Member$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Member$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Player<T extends Member$PlayerArgs<ExtArgs> = {}>(args?: Subset<T, Member$PlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sponsor<T extends Member$SponsorArgs<ExtArgs> = {}>(args?: Subset<T, Member$SponsorArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Team<T extends Member$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Member$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Team_member<T extends Member$Team_memberArgs<ExtArgs> = {}>(args?: Subset<T, Member$Team_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly user_name: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly surname: FieldRef<"Member", 'String'>
    readonly address: FieldRef<"Member", 'String'>
    readonly birth_date: FieldRef<"Member", 'DateTime'>
    readonly country: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly avatar: FieldRef<"Member", 'String'>
    readonly password: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.Admin
   */
  export type Member$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Member.Community_member
   */
  export type Member$Community_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_member
     */
    select?: Community_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community_member
     */
    omit?: Community_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Community_memberInclude<ExtArgs> | null
    where?: Community_memberWhereInput
    orderBy?: Community_memberOrderByWithRelationInput | Community_memberOrderByWithRelationInput[]
    cursor?: Community_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Community_memberScalarFieldEnum | Community_memberScalarFieldEnum[]
  }

  /**
   * Member.Employee
   */
  export type Member$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Member.Player
   */
  export type Member$PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Member.Sponsor
   */
  export type Member$SponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    where?: SponsorWhereInput
  }

  /**
   * Member.Team
   */
  export type Member$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Member.Team_member
   */
  export type Member$Team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    where?: Team_memberWhereInput
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    cursor?: Team_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id_player: number | null
    id_tour: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id_player: number | null
    id_tour: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id_player: number | null
    id_tour: number | null
    user_name: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id_player: number | null
    id_tour: number | null
    user_name: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id_player: number
    id_tour: number
    user_name: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id_player?: true
    id_tour?: true
  }

  export type PlayerSumAggregateInputType = {
    id_player?: true
    id_tour?: true
  }

  export type PlayerMinAggregateInputType = {
    id_player?: true
    id_tour?: true
    user_name?: true
  }

  export type PlayerMaxAggregateInputType = {
    id_player?: true
    id_tour?: true
    user_name?: true
  }

  export type PlayerCountAggregateInputType = {
    id_player?: true
    id_tour?: true
    user_name?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id_player: number
    id_tour: number | null
    user_name: string | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_player?: boolean
    id_tour?: boolean
    user_name?: boolean
    Member?: boolean | Player$MemberArgs<ExtArgs>
    Tournament?: boolean | Player$TournamentArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>



  export type PlayerSelectScalar = {
    id_player?: boolean
    id_tour?: boolean
    user_name?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_player" | "id_tour" | "user_name", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | Player$MemberArgs<ExtArgs>
    Tournament?: boolean | Player$TournamentArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      Member: Prisma.$MemberPayload<ExtArgs> | null
      Tournament: Prisma.$TournamentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_player: number
      id_tour: number | null
      user_name: string | null
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id_player`
     * const playerWithId_playerOnly = await prisma.player.findMany({ select: { id_player: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member<T extends Player$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Player$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Tournament<T extends Player$TournamentArgs<ExtArgs> = {}>(args?: Subset<T, Player$TournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id_player: FieldRef<"Player", 'Int'>
    readonly id_tour: FieldRef<"Player", 'Int'>
    readonly user_name: FieldRef<"Player", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data?: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.Member
   */
  export type Player$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Player.Tournament
   */
  export type Player$TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Prize
   */

  export type AggregatePrize = {
    _count: PrizeCountAggregateOutputType | null
    _avg: PrizeAvgAggregateOutputType | null
    _sum: PrizeSumAggregateOutputType | null
    _min: PrizeMinAggregateOutputType | null
    _max: PrizeMaxAggregateOutputType | null
  }

  export type PrizeAvgAggregateOutputType = {
    id_prize: number | null
    spots: number | null
    group_spot: number | null
    id_tour: number | null
    id_type: number | null
    id_admin: number | null
  }

  export type PrizeSumAggregateOutputType = {
    id_prize: number | null
    spots: number | null
    group_spot: number | null
    id_tour: number | null
    id_type: number | null
    id_admin: number | null
  }

  export type PrizeMinAggregateOutputType = {
    id_prize: number | null
    name: string | null
    spots: number | null
    group_spot: number | null
    id_tour: number | null
    id_type: number | null
    id_admin: number | null
  }

  export type PrizeMaxAggregateOutputType = {
    id_prize: number | null
    name: string | null
    spots: number | null
    group_spot: number | null
    id_tour: number | null
    id_type: number | null
    id_admin: number | null
  }

  export type PrizeCountAggregateOutputType = {
    id_prize: number
    name: number
    spots: number
    group_spot: number
    id_tour: number
    id_type: number
    id_admin: number
    _all: number
  }


  export type PrizeAvgAggregateInputType = {
    id_prize?: true
    spots?: true
    group_spot?: true
    id_tour?: true
    id_type?: true
    id_admin?: true
  }

  export type PrizeSumAggregateInputType = {
    id_prize?: true
    spots?: true
    group_spot?: true
    id_tour?: true
    id_type?: true
    id_admin?: true
  }

  export type PrizeMinAggregateInputType = {
    id_prize?: true
    name?: true
    spots?: true
    group_spot?: true
    id_tour?: true
    id_type?: true
    id_admin?: true
  }

  export type PrizeMaxAggregateInputType = {
    id_prize?: true
    name?: true
    spots?: true
    group_spot?: true
    id_tour?: true
    id_type?: true
    id_admin?: true
  }

  export type PrizeCountAggregateInputType = {
    id_prize?: true
    name?: true
    spots?: true
    group_spot?: true
    id_tour?: true
    id_type?: true
    id_admin?: true
    _all?: true
  }

  export type PrizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prize to aggregate.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prizes
    **/
    _count?: true | PrizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrizeMaxAggregateInputType
  }

  export type GetPrizeAggregateType<T extends PrizeAggregateArgs> = {
        [P in keyof T & keyof AggregatePrize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrize[P]>
      : GetScalarType<T[P], AggregatePrize[P]>
  }




  export type PrizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrizeWhereInput
    orderBy?: PrizeOrderByWithAggregationInput | PrizeOrderByWithAggregationInput[]
    by: PrizeScalarFieldEnum[] | PrizeScalarFieldEnum
    having?: PrizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrizeCountAggregateInputType | true
    _avg?: PrizeAvgAggregateInputType
    _sum?: PrizeSumAggregateInputType
    _min?: PrizeMinAggregateInputType
    _max?: PrizeMaxAggregateInputType
  }

  export type PrizeGroupByOutputType = {
    id_prize: number
    name: string | null
    spots: number | null
    group_spot: number | null
    id_tour: number | null
    id_type: number | null
    id_admin: number | null
    _count: PrizeCountAggregateOutputType | null
    _avg: PrizeAvgAggregateOutputType | null
    _sum: PrizeSumAggregateOutputType | null
    _min: PrizeMinAggregateOutputType | null
    _max: PrizeMaxAggregateOutputType | null
  }

  type GetPrizeGroupByPayload<T extends PrizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrizeGroupByOutputType[P]>
            : GetScalarType<T[P], PrizeGroupByOutputType[P]>
        }
      >
    >


  export type PrizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prize?: boolean
    name?: boolean
    spots?: boolean
    group_spot?: boolean
    id_tour?: boolean
    id_type?: boolean
    id_admin?: boolean
    Tournament?: boolean | Prize$TournamentArgs<ExtArgs>
    Type?: boolean | Prize$TypeArgs<ExtArgs>
    Prize_sponsor?: boolean | Prize$Prize_sponsorArgs<ExtArgs>
    _count?: boolean | PrizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prize"]>



  export type PrizeSelectScalar = {
    id_prize?: boolean
    name?: boolean
    spots?: boolean
    group_spot?: boolean
    id_tour?: boolean
    id_type?: boolean
    id_admin?: boolean
  }

  export type PrizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prize" | "name" | "spots" | "group_spot" | "id_tour" | "id_type" | "id_admin", ExtArgs["result"]["prize"]>
  export type PrizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | Prize$TournamentArgs<ExtArgs>
    Type?: boolean | Prize$TypeArgs<ExtArgs>
    Prize_sponsor?: boolean | Prize$Prize_sponsorArgs<ExtArgs>
    _count?: boolean | PrizeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prize"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs> | null
      Type: Prisma.$TypePayload<ExtArgs> | null
      Prize_sponsor: Prisma.$Prize_sponsorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prize: number
      name: string | null
      spots: number | null
      group_spot: number | null
      id_tour: number | null
      id_type: number | null
      id_admin: number | null
    }, ExtArgs["result"]["prize"]>
    composites: {}
  }

  type PrizeGetPayload<S extends boolean | null | undefined | PrizeDefaultArgs> = $Result.GetResult<Prisma.$PrizePayload, S>

  type PrizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrizeCountAggregateInputType | true
    }

  export interface PrizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prize'], meta: { name: 'Prize' } }
    /**
     * Find zero or one Prize that matches the filter.
     * @param {PrizeFindUniqueArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrizeFindUniqueArgs>(args: SelectSubset<T, PrizeFindUniqueArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrizeFindUniqueOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrizeFindUniqueOrThrowArgs>(args: SelectSubset<T, PrizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrizeFindFirstArgs>(args?: SelectSubset<T, PrizeFindFirstArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrizeFindFirstOrThrowArgs>(args?: SelectSubset<T, PrizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prizes
     * const prizes = await prisma.prize.findMany()
     * 
     * // Get first 10 Prizes
     * const prizes = await prisma.prize.findMany({ take: 10 })
     * 
     * // Only select the `id_prize`
     * const prizeWithId_prizeOnly = await prisma.prize.findMany({ select: { id_prize: true } })
     * 
     */
    findMany<T extends PrizeFindManyArgs>(args?: SelectSubset<T, PrizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prize.
     * @param {PrizeCreateArgs} args - Arguments to create a Prize.
     * @example
     * // Create one Prize
     * const Prize = await prisma.prize.create({
     *   data: {
     *     // ... data to create a Prize
     *   }
     * })
     * 
     */
    create<T extends PrizeCreateArgs>(args: SelectSubset<T, PrizeCreateArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prizes.
     * @param {PrizeCreateManyArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prize = await prisma.prize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrizeCreateManyArgs>(args?: SelectSubset<T, PrizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prize.
     * @param {PrizeDeleteArgs} args - Arguments to delete one Prize.
     * @example
     * // Delete one Prize
     * const Prize = await prisma.prize.delete({
     *   where: {
     *     // ... filter to delete one Prize
     *   }
     * })
     * 
     */
    delete<T extends PrizeDeleteArgs>(args: SelectSubset<T, PrizeDeleteArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prize.
     * @param {PrizeUpdateArgs} args - Arguments to update one Prize.
     * @example
     * // Update one Prize
     * const prize = await prisma.prize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrizeUpdateArgs>(args: SelectSubset<T, PrizeUpdateArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prizes.
     * @param {PrizeDeleteManyArgs} args - Arguments to filter Prizes to delete.
     * @example
     * // Delete a few Prizes
     * const { count } = await prisma.prize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrizeDeleteManyArgs>(args?: SelectSubset<T, PrizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prizes
     * const prize = await prisma.prize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrizeUpdateManyArgs>(args: SelectSubset<T, PrizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prize.
     * @param {PrizeUpsertArgs} args - Arguments to update or create a Prize.
     * @example
     * // Update or create a Prize
     * const prize = await prisma.prize.upsert({
     *   create: {
     *     // ... data to create a Prize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prize we want to update
     *   }
     * })
     */
    upsert<T extends PrizeUpsertArgs>(args: SelectSubset<T, PrizeUpsertArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeCountArgs} args - Arguments to filter Prizes to count.
     * @example
     * // Count the number of Prizes
     * const count = await prisma.prize.count({
     *   where: {
     *     // ... the filter for the Prizes we want to count
     *   }
     * })
    **/
    count<T extends PrizeCountArgs>(
      args?: Subset<T, PrizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrizeAggregateArgs>(args: Subset<T, PrizeAggregateArgs>): Prisma.PrismaPromise<GetPrizeAggregateType<T>>

    /**
     * Group by Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrizeGroupByArgs['orderBy'] }
        : { orderBy?: PrizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prize model
   */
  readonly fields: PrizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends Prize$TournamentArgs<ExtArgs> = {}>(args?: Subset<T, Prize$TournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Type<T extends Prize$TypeArgs<ExtArgs> = {}>(args?: Subset<T, Prize$TypeArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Prize_sponsor<T extends Prize$Prize_sponsorArgs<ExtArgs> = {}>(args?: Subset<T, Prize$Prize_sponsorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prize model
   */
  interface PrizeFieldRefs {
    readonly id_prize: FieldRef<"Prize", 'Int'>
    readonly name: FieldRef<"Prize", 'String'>
    readonly spots: FieldRef<"Prize", 'Int'>
    readonly group_spot: FieldRef<"Prize", 'Int'>
    readonly id_tour: FieldRef<"Prize", 'Int'>
    readonly id_type: FieldRef<"Prize", 'Int'>
    readonly id_admin: FieldRef<"Prize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prize findUnique
   */
  export type PrizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize findUniqueOrThrow
   */
  export type PrizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize findFirst
   */
  export type PrizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prizes.
     */
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize findFirstOrThrow
   */
  export type PrizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prizes.
     */
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize findMany
   */
  export type PrizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prizes to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize create
   */
  export type PrizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Prize.
     */
    data?: XOR<PrizeCreateInput, PrizeUncheckedCreateInput>
  }

  /**
   * Prize createMany
   */
  export type PrizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prizes.
     */
    data: PrizeCreateManyInput | PrizeCreateManyInput[]
  }

  /**
   * Prize update
   */
  export type PrizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Prize.
     */
    data: XOR<PrizeUpdateInput, PrizeUncheckedUpdateInput>
    /**
     * Choose, which Prize to update.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize updateMany
   */
  export type PrizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prizes.
     */
    data: XOR<PrizeUpdateManyMutationInput, PrizeUncheckedUpdateManyInput>
    /**
     * Filter which Prizes to update
     */
    where?: PrizeWhereInput
    /**
     * Limit how many Prizes to update.
     */
    limit?: number
  }

  /**
   * Prize upsert
   */
  export type PrizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Prize to update in case it exists.
     */
    where: PrizeWhereUniqueInput
    /**
     * In case the Prize found by the `where` argument doesn't exist, create a new Prize with this data.
     */
    create: XOR<PrizeCreateInput, PrizeUncheckedCreateInput>
    /**
     * In case the Prize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrizeUpdateInput, PrizeUncheckedUpdateInput>
  }

  /**
   * Prize delete
   */
  export type PrizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter which Prize to delete.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize deleteMany
   */
  export type PrizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prizes to delete
     */
    where?: PrizeWhereInput
    /**
     * Limit how many Prizes to delete.
     */
    limit?: number
  }

  /**
   * Prize.Tournament
   */
  export type Prize$TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * Prize.Type
   */
  export type Prize$TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    where?: TypeWhereInput
  }

  /**
   * Prize.Prize_sponsor
   */
  export type Prize$Prize_sponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    where?: Prize_sponsorWhereInput
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    cursor?: Prize_sponsorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prize_sponsorScalarFieldEnum | Prize_sponsorScalarFieldEnum[]
  }

  /**
   * Prize without action
   */
  export type PrizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
  }


  /**
   * Model Prize_sponsor
   */

  export type AggregatePrize_sponsor = {
    _count: Prize_sponsorCountAggregateOutputType | null
    _avg: Prize_sponsorAvgAggregateOutputType | null
    _sum: Prize_sponsorSumAggregateOutputType | null
    _min: Prize_sponsorMinAggregateOutputType | null
    _max: Prize_sponsorMaxAggregateOutputType | null
  }

  export type Prize_sponsorAvgAggregateOutputType = {
    id_prize_sponsor: number | null
    id_prize: number | null
  }

  export type Prize_sponsorSumAggregateOutputType = {
    id_prize_sponsor: number | null
    id_prize: number | null
  }

  export type Prize_sponsorMinAggregateOutputType = {
    id_prize_sponsor: number | null
    id_prize: number | null
    user_name: string | null
  }

  export type Prize_sponsorMaxAggregateOutputType = {
    id_prize_sponsor: number | null
    id_prize: number | null
    user_name: string | null
  }

  export type Prize_sponsorCountAggregateOutputType = {
    id_prize_sponsor: number
    id_prize: number
    user_name: number
    _all: number
  }


  export type Prize_sponsorAvgAggregateInputType = {
    id_prize_sponsor?: true
    id_prize?: true
  }

  export type Prize_sponsorSumAggregateInputType = {
    id_prize_sponsor?: true
    id_prize?: true
  }

  export type Prize_sponsorMinAggregateInputType = {
    id_prize_sponsor?: true
    id_prize?: true
    user_name?: true
  }

  export type Prize_sponsorMaxAggregateInputType = {
    id_prize_sponsor?: true
    id_prize?: true
    user_name?: true
  }

  export type Prize_sponsorCountAggregateInputType = {
    id_prize_sponsor?: true
    id_prize?: true
    user_name?: true
    _all?: true
  }

  export type Prize_sponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prize_sponsor to aggregate.
     */
    where?: Prize_sponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prize_sponsors to fetch.
     */
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Prize_sponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prize_sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prize_sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prize_sponsors
    **/
    _count?: true | Prize_sponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prize_sponsorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prize_sponsorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prize_sponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prize_sponsorMaxAggregateInputType
  }

  export type GetPrize_sponsorAggregateType<T extends Prize_sponsorAggregateArgs> = {
        [P in keyof T & keyof AggregatePrize_sponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrize_sponsor[P]>
      : GetScalarType<T[P], AggregatePrize_sponsor[P]>
  }




  export type Prize_sponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prize_sponsorWhereInput
    orderBy?: Prize_sponsorOrderByWithAggregationInput | Prize_sponsorOrderByWithAggregationInput[]
    by: Prize_sponsorScalarFieldEnum[] | Prize_sponsorScalarFieldEnum
    having?: Prize_sponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prize_sponsorCountAggregateInputType | true
    _avg?: Prize_sponsorAvgAggregateInputType
    _sum?: Prize_sponsorSumAggregateInputType
    _min?: Prize_sponsorMinAggregateInputType
    _max?: Prize_sponsorMaxAggregateInputType
  }

  export type Prize_sponsorGroupByOutputType = {
    id_prize_sponsor: number
    id_prize: number | null
    user_name: string | null
    _count: Prize_sponsorCountAggregateOutputType | null
    _avg: Prize_sponsorAvgAggregateOutputType | null
    _sum: Prize_sponsorSumAggregateOutputType | null
    _min: Prize_sponsorMinAggregateOutputType | null
    _max: Prize_sponsorMaxAggregateOutputType | null
  }

  type GetPrize_sponsorGroupByPayload<T extends Prize_sponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prize_sponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prize_sponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prize_sponsorGroupByOutputType[P]>
            : GetScalarType<T[P], Prize_sponsorGroupByOutputType[P]>
        }
      >
    >


  export type Prize_sponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prize_sponsor?: boolean
    id_prize?: boolean
    user_name?: boolean
    Prize?: boolean | Prize_sponsor$PrizeArgs<ExtArgs>
    Sponsor?: boolean | Prize_sponsor$SponsorArgs<ExtArgs>
  }, ExtArgs["result"]["prize_sponsor"]>



  export type Prize_sponsorSelectScalar = {
    id_prize_sponsor?: boolean
    id_prize?: boolean
    user_name?: boolean
  }

  export type Prize_sponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prize_sponsor" | "id_prize" | "user_name", ExtArgs["result"]["prize_sponsor"]>
  export type Prize_sponsorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize?: boolean | Prize_sponsor$PrizeArgs<ExtArgs>
    Sponsor?: boolean | Prize_sponsor$SponsorArgs<ExtArgs>
  }

  export type $Prize_sponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prize_sponsor"
    objects: {
      Prize: Prisma.$PrizePayload<ExtArgs> | null
      Sponsor: Prisma.$SponsorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prize_sponsor: number
      id_prize: number | null
      user_name: string | null
    }, ExtArgs["result"]["prize_sponsor"]>
    composites: {}
  }

  type Prize_sponsorGetPayload<S extends boolean | null | undefined | Prize_sponsorDefaultArgs> = $Result.GetResult<Prisma.$Prize_sponsorPayload, S>

  type Prize_sponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Prize_sponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prize_sponsorCountAggregateInputType | true
    }

  export interface Prize_sponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prize_sponsor'], meta: { name: 'Prize_sponsor' } }
    /**
     * Find zero or one Prize_sponsor that matches the filter.
     * @param {Prize_sponsorFindUniqueArgs} args - Arguments to find a Prize_sponsor
     * @example
     * // Get one Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Prize_sponsorFindUniqueArgs>(args: SelectSubset<T, Prize_sponsorFindUniqueArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prize_sponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Prize_sponsorFindUniqueOrThrowArgs} args - Arguments to find a Prize_sponsor
     * @example
     * // Get one Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Prize_sponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, Prize_sponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize_sponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorFindFirstArgs} args - Arguments to find a Prize_sponsor
     * @example
     * // Get one Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Prize_sponsorFindFirstArgs>(args?: SelectSubset<T, Prize_sponsorFindFirstArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize_sponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorFindFirstOrThrowArgs} args - Arguments to find a Prize_sponsor
     * @example
     * // Get one Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Prize_sponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, Prize_sponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prize_sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prize_sponsors
     * const prize_sponsors = await prisma.prize_sponsor.findMany()
     * 
     * // Get first 10 Prize_sponsors
     * const prize_sponsors = await prisma.prize_sponsor.findMany({ take: 10 })
     * 
     * // Only select the `id_prize_sponsor`
     * const prize_sponsorWithId_prize_sponsorOnly = await prisma.prize_sponsor.findMany({ select: { id_prize_sponsor: true } })
     * 
     */
    findMany<T extends Prize_sponsorFindManyArgs>(args?: SelectSubset<T, Prize_sponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prize_sponsor.
     * @param {Prize_sponsorCreateArgs} args - Arguments to create a Prize_sponsor.
     * @example
     * // Create one Prize_sponsor
     * const Prize_sponsor = await prisma.prize_sponsor.create({
     *   data: {
     *     // ... data to create a Prize_sponsor
     *   }
     * })
     * 
     */
    create<T extends Prize_sponsorCreateArgs>(args: SelectSubset<T, Prize_sponsorCreateArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prize_sponsors.
     * @param {Prize_sponsorCreateManyArgs} args - Arguments to create many Prize_sponsors.
     * @example
     * // Create many Prize_sponsors
     * const prize_sponsor = await prisma.prize_sponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Prize_sponsorCreateManyArgs>(args?: SelectSubset<T, Prize_sponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prize_sponsor.
     * @param {Prize_sponsorDeleteArgs} args - Arguments to delete one Prize_sponsor.
     * @example
     * // Delete one Prize_sponsor
     * const Prize_sponsor = await prisma.prize_sponsor.delete({
     *   where: {
     *     // ... filter to delete one Prize_sponsor
     *   }
     * })
     * 
     */
    delete<T extends Prize_sponsorDeleteArgs>(args: SelectSubset<T, Prize_sponsorDeleteArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prize_sponsor.
     * @param {Prize_sponsorUpdateArgs} args - Arguments to update one Prize_sponsor.
     * @example
     * // Update one Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Prize_sponsorUpdateArgs>(args: SelectSubset<T, Prize_sponsorUpdateArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prize_sponsors.
     * @param {Prize_sponsorDeleteManyArgs} args - Arguments to filter Prize_sponsors to delete.
     * @example
     * // Delete a few Prize_sponsors
     * const { count } = await prisma.prize_sponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Prize_sponsorDeleteManyArgs>(args?: SelectSubset<T, Prize_sponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prize_sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prize_sponsors
     * const prize_sponsor = await prisma.prize_sponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Prize_sponsorUpdateManyArgs>(args: SelectSubset<T, Prize_sponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prize_sponsor.
     * @param {Prize_sponsorUpsertArgs} args - Arguments to update or create a Prize_sponsor.
     * @example
     * // Update or create a Prize_sponsor
     * const prize_sponsor = await prisma.prize_sponsor.upsert({
     *   create: {
     *     // ... data to create a Prize_sponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prize_sponsor we want to update
     *   }
     * })
     */
    upsert<T extends Prize_sponsorUpsertArgs>(args: SelectSubset<T, Prize_sponsorUpsertArgs<ExtArgs>>): Prisma__Prize_sponsorClient<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prize_sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorCountArgs} args - Arguments to filter Prize_sponsors to count.
     * @example
     * // Count the number of Prize_sponsors
     * const count = await prisma.prize_sponsor.count({
     *   where: {
     *     // ... the filter for the Prize_sponsors we want to count
     *   }
     * })
    **/
    count<T extends Prize_sponsorCountArgs>(
      args?: Subset<T, Prize_sponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prize_sponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prize_sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prize_sponsorAggregateArgs>(args: Subset<T, Prize_sponsorAggregateArgs>): Prisma.PrismaPromise<GetPrize_sponsorAggregateType<T>>

    /**
     * Group by Prize_sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prize_sponsorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Prize_sponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Prize_sponsorGroupByArgs['orderBy'] }
        : { orderBy?: Prize_sponsorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Prize_sponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrize_sponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prize_sponsor model
   */
  readonly fields: Prize_sponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prize_sponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Prize_sponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Prize<T extends Prize_sponsor$PrizeArgs<ExtArgs> = {}>(args?: Subset<T, Prize_sponsor$PrizeArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Sponsor<T extends Prize_sponsor$SponsorArgs<ExtArgs> = {}>(args?: Subset<T, Prize_sponsor$SponsorArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prize_sponsor model
   */
  interface Prize_sponsorFieldRefs {
    readonly id_prize_sponsor: FieldRef<"Prize_sponsor", 'Int'>
    readonly id_prize: FieldRef<"Prize_sponsor", 'Int'>
    readonly user_name: FieldRef<"Prize_sponsor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prize_sponsor findUnique
   */
  export type Prize_sponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter, which Prize_sponsor to fetch.
     */
    where: Prize_sponsorWhereUniqueInput
  }

  /**
   * Prize_sponsor findUniqueOrThrow
   */
  export type Prize_sponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter, which Prize_sponsor to fetch.
     */
    where: Prize_sponsorWhereUniqueInput
  }

  /**
   * Prize_sponsor findFirst
   */
  export type Prize_sponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter, which Prize_sponsor to fetch.
     */
    where?: Prize_sponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prize_sponsors to fetch.
     */
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prize_sponsors.
     */
    cursor?: Prize_sponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prize_sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prize_sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prize_sponsors.
     */
    distinct?: Prize_sponsorScalarFieldEnum | Prize_sponsorScalarFieldEnum[]
  }

  /**
   * Prize_sponsor findFirstOrThrow
   */
  export type Prize_sponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter, which Prize_sponsor to fetch.
     */
    where?: Prize_sponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prize_sponsors to fetch.
     */
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prize_sponsors.
     */
    cursor?: Prize_sponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prize_sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prize_sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prize_sponsors.
     */
    distinct?: Prize_sponsorScalarFieldEnum | Prize_sponsorScalarFieldEnum[]
  }

  /**
   * Prize_sponsor findMany
   */
  export type Prize_sponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter, which Prize_sponsors to fetch.
     */
    where?: Prize_sponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prize_sponsors to fetch.
     */
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prize_sponsors.
     */
    cursor?: Prize_sponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prize_sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prize_sponsors.
     */
    skip?: number
    distinct?: Prize_sponsorScalarFieldEnum | Prize_sponsorScalarFieldEnum[]
  }

  /**
   * Prize_sponsor create
   */
  export type Prize_sponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * The data needed to create a Prize_sponsor.
     */
    data?: XOR<Prize_sponsorCreateInput, Prize_sponsorUncheckedCreateInput>
  }

  /**
   * Prize_sponsor createMany
   */
  export type Prize_sponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prize_sponsors.
     */
    data: Prize_sponsorCreateManyInput | Prize_sponsorCreateManyInput[]
  }

  /**
   * Prize_sponsor update
   */
  export type Prize_sponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * The data needed to update a Prize_sponsor.
     */
    data: XOR<Prize_sponsorUpdateInput, Prize_sponsorUncheckedUpdateInput>
    /**
     * Choose, which Prize_sponsor to update.
     */
    where: Prize_sponsorWhereUniqueInput
  }

  /**
   * Prize_sponsor updateMany
   */
  export type Prize_sponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prize_sponsors.
     */
    data: XOR<Prize_sponsorUpdateManyMutationInput, Prize_sponsorUncheckedUpdateManyInput>
    /**
     * Filter which Prize_sponsors to update
     */
    where?: Prize_sponsorWhereInput
    /**
     * Limit how many Prize_sponsors to update.
     */
    limit?: number
  }

  /**
   * Prize_sponsor upsert
   */
  export type Prize_sponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * The filter to search for the Prize_sponsor to update in case it exists.
     */
    where: Prize_sponsorWhereUniqueInput
    /**
     * In case the Prize_sponsor found by the `where` argument doesn't exist, create a new Prize_sponsor with this data.
     */
    create: XOR<Prize_sponsorCreateInput, Prize_sponsorUncheckedCreateInput>
    /**
     * In case the Prize_sponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Prize_sponsorUpdateInput, Prize_sponsorUncheckedUpdateInput>
  }

  /**
   * Prize_sponsor delete
   */
  export type Prize_sponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    /**
     * Filter which Prize_sponsor to delete.
     */
    where: Prize_sponsorWhereUniqueInput
  }

  /**
   * Prize_sponsor deleteMany
   */
  export type Prize_sponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prize_sponsors to delete
     */
    where?: Prize_sponsorWhereInput
    /**
     * Limit how many Prize_sponsors to delete.
     */
    limit?: number
  }

  /**
   * Prize_sponsor.Prize
   */
  export type Prize_sponsor$PrizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    where?: PrizeWhereInput
  }

  /**
   * Prize_sponsor.Sponsor
   */
  export type Prize_sponsor$SponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    where?: SponsorWhereInput
  }

  /**
   * Prize_sponsor without action
   */
  export type Prize_sponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
  }


  /**
   * Model Sponsor
   */

  export type AggregateSponsor = {
    _count: SponsorCountAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  export type SponsorMinAggregateOutputType = {
    user_name: string | null
    company_name: string | null
    title: string | null
  }

  export type SponsorMaxAggregateOutputType = {
    user_name: string | null
    company_name: string | null
    title: string | null
  }

  export type SponsorCountAggregateOutputType = {
    user_name: number
    company_name: number
    title: number
    _all: number
  }


  export type SponsorMinAggregateInputType = {
    user_name?: true
    company_name?: true
    title?: true
  }

  export type SponsorMaxAggregateInputType = {
    user_name?: true
    company_name?: true
    title?: true
  }

  export type SponsorCountAggregateInputType = {
    user_name?: true
    company_name?: true
    title?: true
    _all?: true
  }

  export type SponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsor to aggregate.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sponsors
    **/
    _count?: true | SponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorMaxAggregateInputType
  }

  export type GetSponsorAggregateType<T extends SponsorAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsor[P]>
      : GetScalarType<T[P], AggregateSponsor[P]>
  }




  export type SponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorWhereInput
    orderBy?: SponsorOrderByWithAggregationInput | SponsorOrderByWithAggregationInput[]
    by: SponsorScalarFieldEnum[] | SponsorScalarFieldEnum
    having?: SponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorCountAggregateInputType | true
    _min?: SponsorMinAggregateInputType
    _max?: SponsorMaxAggregateInputType
  }

  export type SponsorGroupByOutputType = {
    user_name: string
    company_name: string | null
    title: string | null
    _count: SponsorCountAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  type GetSponsorGroupByPayload<T extends SponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorGroupByOutputType[P]>
        }
      >
    >


  export type SponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    company_name?: boolean
    title?: boolean
    Prize_sponsor?: boolean | Sponsor$Prize_sponsorArgs<ExtArgs>
    Member?: boolean | MemberDefaultArgs<ExtArgs>
    _count?: boolean | SponsorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsor"]>



  export type SponsorSelectScalar = {
    user_name?: boolean
    company_name?: boolean
    title?: boolean
  }

  export type SponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_name" | "company_name" | "title", ExtArgs["result"]["sponsor"]>
  export type SponsorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize_sponsor?: boolean | Sponsor$Prize_sponsorArgs<ExtArgs>
    Member?: boolean | MemberDefaultArgs<ExtArgs>
    _count?: boolean | SponsorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sponsor"
    objects: {
      Prize_sponsor: Prisma.$Prize_sponsorPayload<ExtArgs>[]
      Member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_name: string
      company_name: string | null
      title: string | null
    }, ExtArgs["result"]["sponsor"]>
    composites: {}
  }

  type SponsorGetPayload<S extends boolean | null | undefined | SponsorDefaultArgs> = $Result.GetResult<Prisma.$SponsorPayload, S>

  type SponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorCountAggregateInputType | true
    }

  export interface SponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sponsor'], meta: { name: 'Sponsor' } }
    /**
     * Find zero or one Sponsor that matches the filter.
     * @param {SponsorFindUniqueArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorFindUniqueArgs>(args: SelectSubset<T, SponsorFindUniqueArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SponsorFindUniqueOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorFindFirstArgs>(args?: SelectSubset<T, SponsorFindFirstArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsors
     * const sponsors = await prisma.sponsor.findMany()
     * 
     * // Get first 10 Sponsors
     * const sponsors = await prisma.sponsor.findMany({ take: 10 })
     * 
     * // Only select the `user_name`
     * const sponsorWithUser_nameOnly = await prisma.sponsor.findMany({ select: { user_name: true } })
     * 
     */
    findMany<T extends SponsorFindManyArgs>(args?: SelectSubset<T, SponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sponsor.
     * @param {SponsorCreateArgs} args - Arguments to create a Sponsor.
     * @example
     * // Create one Sponsor
     * const Sponsor = await prisma.sponsor.create({
     *   data: {
     *     // ... data to create a Sponsor
     *   }
     * })
     * 
     */
    create<T extends SponsorCreateArgs>(args: SelectSubset<T, SponsorCreateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sponsors.
     * @param {SponsorCreateManyArgs} args - Arguments to create many Sponsors.
     * @example
     * // Create many Sponsors
     * const sponsor = await prisma.sponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorCreateManyArgs>(args?: SelectSubset<T, SponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sponsor.
     * @param {SponsorDeleteArgs} args - Arguments to delete one Sponsor.
     * @example
     * // Delete one Sponsor
     * const Sponsor = await prisma.sponsor.delete({
     *   where: {
     *     // ... filter to delete one Sponsor
     *   }
     * })
     * 
     */
    delete<T extends SponsorDeleteArgs>(args: SelectSubset<T, SponsorDeleteArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sponsor.
     * @param {SponsorUpdateArgs} args - Arguments to update one Sponsor.
     * @example
     * // Update one Sponsor
     * const sponsor = await prisma.sponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorUpdateArgs>(args: SelectSubset<T, SponsorUpdateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sponsors.
     * @param {SponsorDeleteManyArgs} args - Arguments to filter Sponsors to delete.
     * @example
     * // Delete a few Sponsors
     * const { count } = await prisma.sponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorDeleteManyArgs>(args?: SelectSubset<T, SponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsors
     * const sponsor = await prisma.sponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorUpdateManyArgs>(args: SelectSubset<T, SponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sponsor.
     * @param {SponsorUpsertArgs} args - Arguments to update or create a Sponsor.
     * @example
     * // Update or create a Sponsor
     * const sponsor = await prisma.sponsor.upsert({
     *   create: {
     *     // ... data to create a Sponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsor we want to update
     *   }
     * })
     */
    upsert<T extends SponsorUpsertArgs>(args: SelectSubset<T, SponsorUpsertArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorCountArgs} args - Arguments to filter Sponsors to count.
     * @example
     * // Count the number of Sponsors
     * const count = await prisma.sponsor.count({
     *   where: {
     *     // ... the filter for the Sponsors we want to count
     *   }
     * })
    **/
    count<T extends SponsorCountArgs>(
      args?: Subset<T, SponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SponsorAggregateArgs>(args: Subset<T, SponsorAggregateArgs>): Prisma.PrismaPromise<GetSponsorAggregateType<T>>

    /**
     * Group by Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorGroupByArgs['orderBy'] }
        : { orderBy?: SponsorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sponsor model
   */
  readonly fields: SponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Prize_sponsor<T extends Sponsor$Prize_sponsorArgs<ExtArgs> = {}>(args?: Subset<T, Sponsor$Prize_sponsorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prize_sponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sponsor model
   */
  interface SponsorFieldRefs {
    readonly user_name: FieldRef<"Sponsor", 'String'>
    readonly company_name: FieldRef<"Sponsor", 'String'>
    readonly title: FieldRef<"Sponsor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sponsor findUnique
   */
  export type SponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findUniqueOrThrow
   */
  export type SponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findFirst
   */
  export type SponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findFirstOrThrow
   */
  export type SponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findMany
   */
  export type SponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor create
   */
  export type SponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sponsor.
     */
    data: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
  }

  /**
   * Sponsor createMany
   */
  export type SponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorCreateManyInput | SponsorCreateManyInput[]
  }

  /**
   * Sponsor update
   */
  export type SponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sponsor.
     */
    data: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
    /**
     * Choose, which Sponsor to update.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor updateMany
   */
  export type SponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorUpdateManyMutationInput, SponsorUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to update.
     */
    limit?: number
  }

  /**
   * Sponsor upsert
   */
  export type SponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sponsor to update in case it exists.
     */
    where: SponsorWhereUniqueInput
    /**
     * In case the Sponsor found by the `where` argument doesn't exist, create a new Sponsor with this data.
     */
    create: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
    /**
     * In case the Sponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
  }

  /**
   * Sponsor delete
   */
  export type SponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
    /**
     * Filter which Sponsor to delete.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor deleteMany
   */
  export type SponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsors to delete
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to delete.
     */
    limit?: number
  }

  /**
   * Sponsor.Prize_sponsor
   */
  export type Sponsor$Prize_sponsorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize_sponsor
     */
    select?: Prize_sponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize_sponsor
     */
    omit?: Prize_sponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prize_sponsorInclude<ExtArgs> | null
    where?: Prize_sponsorWhereInput
    orderBy?: Prize_sponsorOrderByWithRelationInput | Prize_sponsorOrderByWithRelationInput[]
    cursor?: Prize_sponsorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prize_sponsorScalarFieldEnum | Prize_sponsorScalarFieldEnum[]
  }

  /**
   * Sponsor without action
   */
  export type SponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id_team: number | null
    members: number | null
    players: number | null
    id_tour: number | null
  }

  export type TeamSumAggregateOutputType = {
    id_team: number | null
    members: number | null
    players: number | null
    id_tour: number | null
  }

  export type TeamMinAggregateOutputType = {
    id_team: number | null
    name: string | null
    members: number | null
    players: number | null
    id_tour: number | null
    key_team: string | null
    open: boolean | null
    user_name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id_team: number | null
    name: string | null
    members: number | null
    players: number | null
    id_tour: number | null
    key_team: string | null
    open: boolean | null
    user_name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id_team: number
    name: number
    members: number
    players: number
    id_tour: number
    key_team: number
    open: number
    user_name: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id_team?: true
    members?: true
    players?: true
    id_tour?: true
  }

  export type TeamSumAggregateInputType = {
    id_team?: true
    members?: true
    players?: true
    id_tour?: true
  }

  export type TeamMinAggregateInputType = {
    id_team?: true
    name?: true
    members?: true
    players?: true
    id_tour?: true
    key_team?: true
    open?: true
    user_name?: true
  }

  export type TeamMaxAggregateInputType = {
    id_team?: true
    name?: true
    members?: true
    players?: true
    id_tour?: true
    key_team?: true
    open?: true
    user_name?: true
  }

  export type TeamCountAggregateInputType = {
    id_team?: true
    name?: true
    members?: true
    players?: true
    id_tour?: true
    key_team?: true
    open?: true
    user_name?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id_team: number
    name: string | null
    members: number | null
    players: number | null
    id_tour: number | null
    key_team: string | null
    open: boolean | null
    user_name: string | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_team?: boolean
    name?: boolean
    members?: boolean
    players?: boolean
    id_tour?: boolean
    key_team?: boolean
    open?: boolean
    user_name?: boolean
    Tournament?: boolean | Team$TournamentArgs<ExtArgs>
    Member?: boolean | Team$MemberArgs<ExtArgs>
    Team_member?: boolean | Team$Team_memberArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id_team?: boolean
    name?: boolean
    members?: boolean
    players?: boolean
    id_tour?: boolean
    key_team?: boolean
    open?: boolean
    user_name?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_team" | "name" | "members" | "players" | "id_tour" | "key_team" | "open" | "user_name", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | Team$TournamentArgs<ExtArgs>
    Member?: boolean | Team$MemberArgs<ExtArgs>
    Team_member?: boolean | Team$Team_memberArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs> | null
      Member: Prisma.$MemberPayload<ExtArgs> | null
      Team_member: Prisma.$Team_memberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_team: number
      name: string | null
      members: number | null
      players: number | null
      id_tour: number | null
      key_team: string | null
      open: boolean | null
      user_name: string | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id_team`
     * const teamWithId_teamOnly = await prisma.team.findMany({ select: { id_team: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends Team$TournamentArgs<ExtArgs> = {}>(args?: Subset<T, Team$TournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Member<T extends Team$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Team$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Team_member<T extends Team$Team_memberArgs<ExtArgs> = {}>(args?: Subset<T, Team$Team_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id_team: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly members: FieldRef<"Team", 'Int'>
    readonly players: FieldRef<"Team", 'Int'>
    readonly id_tour: FieldRef<"Team", 'Int'>
    readonly key_team: FieldRef<"Team", 'String'>
    readonly open: FieldRef<"Team", 'Boolean'>
    readonly user_name: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data?: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.Tournament
   */
  export type Team$TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * Team.Member
   */
  export type Team$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Team.Team_member
   */
  export type Team$Team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    where?: Team_memberWhereInput
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    cursor?: Team_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null
    _avg: Team_memberAvgAggregateOutputType | null
    _sum: Team_memberSumAggregateOutputType | null
    _min: Team_memberMinAggregateOutputType | null
    _max: Team_memberMaxAggregateOutputType | null
  }

  export type Team_memberAvgAggregateOutputType = {
    id_team_member: number | null
    id_team: number | null
  }

  export type Team_memberSumAggregateOutputType = {
    id_team_member: number | null
    id_team: number | null
  }

  export type Team_memberMinAggregateOutputType = {
    id_team_member: number | null
    id_team: number | null
    user_name: string | null
    status: boolean | null
  }

  export type Team_memberMaxAggregateOutputType = {
    id_team_member: number | null
    id_team: number | null
    user_name: string | null
    status: boolean | null
  }

  export type Team_memberCountAggregateOutputType = {
    id_team_member: number
    id_team: number
    user_name: number
    status: number
    _all: number
  }


  export type Team_memberAvgAggregateInputType = {
    id_team_member?: true
    id_team?: true
  }

  export type Team_memberSumAggregateInputType = {
    id_team_member?: true
    id_team?: true
  }

  export type Team_memberMinAggregateInputType = {
    id_team_member?: true
    id_team?: true
    user_name?: true
    status?: true
  }

  export type Team_memberMaxAggregateInputType = {
    id_team_member?: true
    id_team?: true
    user_name?: true
    status?: true
  }

  export type Team_memberCountAggregateInputType = {
    id_team_member?: true
    id_team?: true
    user_name?: true
    status?: true
    _all?: true
  }

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team_member to aggregate.
     */
    where?: Team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Team_members to fetch.
     */
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Team_members
    **/
    _count?: true | Team_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Team_memberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Team_memberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_memberMaxAggregateInputType
  }

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>
  }




  export type Team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Team_memberWhereInput
    orderBy?: Team_memberOrderByWithAggregationInput | Team_memberOrderByWithAggregationInput[]
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum
    having?: Team_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_memberCountAggregateInputType | true
    _avg?: Team_memberAvgAggregateInputType
    _sum?: Team_memberSumAggregateInputType
    _min?: Team_memberMinAggregateInputType
    _max?: Team_memberMaxAggregateInputType
  }

  export type Team_memberGroupByOutputType = {
    id_team_member: number
    id_team: number | null
    user_name: string | null
    status: boolean | null
    _count: Team_memberCountAggregateOutputType | null
    _avg: Team_memberAvgAggregateOutputType | null
    _sum: Team_memberSumAggregateOutputType | null
    _min: Team_memberMinAggregateOutputType | null
    _max: Team_memberMaxAggregateOutputType | null
  }

  type GetTeam_memberGroupByPayload<T extends Team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
        }
      >
    >


  export type Team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_team_member?: boolean
    id_team?: boolean
    user_name?: boolean
    status?: boolean
    Team?: boolean | Team_member$TeamArgs<ExtArgs>
    Member?: boolean | Team_member$MemberArgs<ExtArgs>
  }, ExtArgs["result"]["team_member"]>



  export type Team_memberSelectScalar = {
    id_team_member?: boolean
    id_team?: boolean
    user_name?: boolean
    status?: boolean
  }

  export type Team_memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_team_member" | "id_team" | "user_name" | "status", ExtArgs["result"]["team_member"]>
  export type Team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Team?: boolean | Team_member$TeamArgs<ExtArgs>
    Member?: boolean | Team_member$MemberArgs<ExtArgs>
  }

  export type $Team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team_member"
    objects: {
      Team: Prisma.$TeamPayload<ExtArgs> | null
      Member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_team_member: number
      id_team: number | null
      user_name: string | null
      status: boolean | null
    }, ExtArgs["result"]["team_member"]>
    composites: {}
  }

  type Team_memberGetPayload<S extends boolean | null | undefined | Team_memberDefaultArgs> = $Result.GetResult<Prisma.$Team_memberPayload, S>

  type Team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Team_memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_memberCountAggregateInputType | true
    }

  export interface Team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team_member'], meta: { name: 'Team_member' } }
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {Team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Team_memberFindUniqueArgs>(args: SelectSubset<T, Team_memberFindUniqueArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Team_memberFindUniqueOrThrowArgs>(args: SelectSubset<T, Team_memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Team_memberFindFirstArgs>(args?: SelectSubset<T, Team_memberFindFirstArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Team_memberFindFirstOrThrowArgs>(args?: SelectSubset<T, Team_memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     * 
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     * 
     * // Only select the `id_team_member`
     * const team_memberWithId_team_memberOnly = await prisma.team_member.findMany({ select: { id_team_member: true } })
     * 
     */
    findMany<T extends Team_memberFindManyArgs>(args?: SelectSubset<T, Team_memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_member.
     * @param {Team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     * 
     */
    create<T extends Team_memberCreateArgs>(args: SelectSubset<T, Team_memberCreateArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_members.
     * @param {Team_memberCreateManyArgs} args - Arguments to create many Team_members.
     * @example
     * // Create many Team_members
     * const team_member = await prisma.team_member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Team_memberCreateManyArgs>(args?: SelectSubset<T, Team_memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team_member.
     * @param {Team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     * 
     */
    delete<T extends Team_memberDeleteArgs>(args: SelectSubset<T, Team_memberDeleteArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_member.
     * @param {Team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Team_memberUpdateArgs>(args: SelectSubset<T, Team_memberUpdateArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_members.
     * @param {Team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Team_memberDeleteManyArgs>(args?: SelectSubset<T, Team_memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Team_memberUpdateManyArgs>(args: SelectSubset<T, Team_memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team_member.
     * @param {Team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     */
    upsert<T extends Team_memberUpsertArgs>(args: SelectSubset<T, Team_memberUpsertArgs<ExtArgs>>): Prisma__Team_memberClient<$Result.GetResult<Prisma.$Team_memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
    **/
    count<T extends Team_memberCountArgs>(
      args?: Subset<T, Team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Team_memberAggregateArgs>(args: Subset<T, Team_memberAggregateArgs>): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Team_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Team_memberGroupByArgs['orderBy'] }
        : { orderBy?: Team_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Team_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team_member model
   */
  readonly fields: Team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Team_memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Team<T extends Team_member$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Team_member$TeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Member<T extends Team_member$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Team_member$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team_member model
   */
  interface Team_memberFieldRefs {
    readonly id_team_member: FieldRef<"Team_member", 'Int'>
    readonly id_team: FieldRef<"Team_member", 'Int'>
    readonly user_name: FieldRef<"Team_member", 'String'>
    readonly status: FieldRef<"Team_member", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Team_member findUnique
   */
  export type Team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter, which Team_member to fetch.
     */
    where: Team_memberWhereUniqueInput
  }

  /**
   * Team_member findUniqueOrThrow
   */
  export type Team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter, which Team_member to fetch.
     */
    where: Team_memberWhereUniqueInput
  }

  /**
   * Team_member findFirst
   */
  export type Team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter, which Team_member to fetch.
     */
    where?: Team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Team_members to fetch.
     */
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Team_members.
     */
    cursor?: Team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * Team_member findFirstOrThrow
   */
  export type Team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter, which Team_member to fetch.
     */
    where?: Team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Team_members to fetch.
     */
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Team_members.
     */
    cursor?: Team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * Team_member findMany
   */
  export type Team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter, which Team_members to fetch.
     */
    where?: Team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Team_members to fetch.
     */
    orderBy?: Team_memberOrderByWithRelationInput | Team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Team_members.
     */
    cursor?: Team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Team_members.
     */
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * Team_member create
   */
  export type Team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * The data needed to create a Team_member.
     */
    data?: XOR<Team_memberCreateInput, Team_memberUncheckedCreateInput>
  }

  /**
   * Team_member createMany
   */
  export type Team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Team_members.
     */
    data: Team_memberCreateManyInput | Team_memberCreateManyInput[]
  }

  /**
   * Team_member update
   */
  export type Team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * The data needed to update a Team_member.
     */
    data: XOR<Team_memberUpdateInput, Team_memberUncheckedUpdateInput>
    /**
     * Choose, which Team_member to update.
     */
    where: Team_memberWhereUniqueInput
  }

  /**
   * Team_member updateMany
   */
  export type Team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Team_members.
     */
    data: XOR<Team_memberUpdateManyMutationInput, Team_memberUncheckedUpdateManyInput>
    /**
     * Filter which Team_members to update
     */
    where?: Team_memberWhereInput
    /**
     * Limit how many Team_members to update.
     */
    limit?: number
  }

  /**
   * Team_member upsert
   */
  export type Team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * The filter to search for the Team_member to update in case it exists.
     */
    where: Team_memberWhereUniqueInput
    /**
     * In case the Team_member found by the `where` argument doesn't exist, create a new Team_member with this data.
     */
    create: XOR<Team_memberCreateInput, Team_memberUncheckedCreateInput>
    /**
     * In case the Team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Team_memberUpdateInput, Team_memberUncheckedUpdateInput>
  }

  /**
   * Team_member delete
   */
  export type Team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
    /**
     * Filter which Team_member to delete.
     */
    where: Team_memberWhereUniqueInput
  }

  /**
   * Team_member deleteMany
   */
  export type Team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team_members to delete
     */
    where?: Team_memberWhereInput
    /**
     * Limit how many Team_members to delete.
     */
    limit?: number
  }

  /**
   * Team_member.Team
   */
  export type Team_member$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Team_member.Member
   */
  export type Team_member$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Team_member without action
   */
  export type Team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team_member
     */
    select?: Team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team_member
     */
    omit?: Team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Team_memberInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    id_tour: number | null
    status: number | null
    id_admin: number | null
    id_community: number | null
    fees: number | null
  }

  export type TournamentSumAggregateOutputType = {
    id_tour: number | null
    status: number | null
    id_admin: number | null
    id_community: number | null
    fees: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id_tour: number | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    status: number | null
    avatar: string | null
    id_admin: number | null
    id_community: number | null
    fees: number | null
  }

  export type TournamentMaxAggregateOutputType = {
    id_tour: number | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    status: number | null
    avatar: string | null
    id_admin: number | null
    id_community: number | null
    fees: number | null
  }

  export type TournamentCountAggregateOutputType = {
    id_tour: number
    location: number
    start_date: number
    end_date: number
    status: number
    avatar: number
    id_admin: number
    id_community: number
    fees: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    id_tour?: true
    status?: true
    id_admin?: true
    id_community?: true
    fees?: true
  }

  export type TournamentSumAggregateInputType = {
    id_tour?: true
    status?: true
    id_admin?: true
    id_community?: true
    fees?: true
  }

  export type TournamentMinAggregateInputType = {
    id_tour?: true
    location?: true
    start_date?: true
    end_date?: true
    status?: true
    avatar?: true
    id_admin?: true
    id_community?: true
    fees?: true
  }

  export type TournamentMaxAggregateInputType = {
    id_tour?: true
    location?: true
    start_date?: true
    end_date?: true
    status?: true
    avatar?: true
    id_admin?: true
    id_community?: true
    fees?: true
  }

  export type TournamentCountAggregateInputType = {
    id_tour?: true
    location?: true
    start_date?: true
    end_date?: true
    status?: true
    avatar?: true
    id_admin?: true
    id_community?: true
    fees?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id_tour: number
    location: string | null
    start_date: Date | null
    end_date: Date | null
    status: number | null
    avatar: string | null
    id_admin: number | null
    id_community: number | null
    fees: number | null
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tour?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    avatar?: boolean
    id_admin?: boolean
    id_community?: boolean
    fees?: boolean
    Player?: boolean | Tournament$PlayerArgs<ExtArgs>
    Prize?: boolean | Tournament$PrizeArgs<ExtArgs>
    Team?: boolean | Tournament$TeamArgs<ExtArgs>
    Admin?: boolean | Tournament$AdminArgs<ExtArgs>
    Community?: boolean | Tournament$CommunityArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>



  export type TournamentSelectScalar = {
    id_tour?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    avatar?: boolean
    id_admin?: boolean
    id_community?: boolean
    fees?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tour" | "location" | "start_date" | "end_date" | "status" | "avatar" | "id_admin" | "id_community" | "fees", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Player?: boolean | Tournament$PlayerArgs<ExtArgs>
    Prize?: boolean | Tournament$PrizeArgs<ExtArgs>
    Team?: boolean | Tournament$TeamArgs<ExtArgs>
    Admin?: boolean | Tournament$AdminArgs<ExtArgs>
    Community?: boolean | Tournament$CommunityArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      Player: Prisma.$PlayerPayload<ExtArgs>[]
      Prize: Prisma.$PrizePayload<ExtArgs>[]
      Team: Prisma.$TeamPayload<ExtArgs>[]
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      Community: Prisma.$CommunityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tour: number
      location: string | null
      start_date: Date | null
      end_date: Date | null
      status: number | null
      avatar: string | null
      id_admin: number | null
      id_community: number | null
      fees: number | null
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id_tour`
     * const tournamentWithId_tourOnly = await prisma.tournament.findMany({ select: { id_tour: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Player<T extends Tournament$PlayerArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$PlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Prize<T extends Tournament$PrizeArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$PrizeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Team<T extends Tournament$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admin<T extends Tournament$AdminArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Community<T extends Tournament$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$CommunityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id_tour: FieldRef<"Tournament", 'Int'>
    readonly location: FieldRef<"Tournament", 'String'>
    readonly start_date: FieldRef<"Tournament", 'DateTime'>
    readonly end_date: FieldRef<"Tournament", 'DateTime'>
    readonly status: FieldRef<"Tournament", 'Int'>
    readonly avatar: FieldRef<"Tournament", 'String'>
    readonly id_admin: FieldRef<"Tournament", 'Int'>
    readonly id_community: FieldRef<"Tournament", 'Int'>
    readonly fees: FieldRef<"Tournament", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data?: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.Player
   */
  export type Tournament$PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Tournament.Prize
   */
  export type Tournament$PrizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    where?: PrizeWhereInput
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    cursor?: PrizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Tournament.Team
   */
  export type Tournament$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Tournament.Admin
   */
  export type Tournament$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Tournament.Community
   */
  export type Tournament$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id_type: number | null
  }

  export type TypeSumAggregateOutputType = {
    id_type: number | null
  }

  export type TypeMinAggregateOutputType = {
    id_type: number | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id_type: number | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id_type: number
    name: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id_type?: true
  }

  export type TypeSumAggregateInputType = {
    id_type?: true
  }

  export type TypeMinAggregateInputType = {
    id_type?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id_type?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id_type?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id_type: number
    name: string | null
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_type?: boolean
    name?: boolean
    Prize?: boolean | Type$PrizeArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>



  export type TypeSelectScalar = {
    id_type?: boolean
    name?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_type" | "name", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prize?: boolean | Type$PrizeArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      Prize: Prisma.$PrizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_type: number
      name: string | null
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id_type`
     * const typeWithId_typeOnly = await prisma.type.findMany({ select: { id_type: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Prize<T extends Type$PrizeArgs<ExtArgs> = {}>(args?: Subset<T, Type$PrizeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id_type: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data?: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.Prize
   */
  export type Type$PrizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    where?: PrizeWhereInput
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    cursor?: PrizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id_admin: 'id_admin',
    id_community: 'id_community',
    user_name: 'user_name'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id_community: 'id_community',
    name: 'name',
    details: 'details',
    avatar: 'avatar',
    members: 'members',
    location: 'location',
    id_manager: 'id_manager',
    privacy: 'privacy'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const Community_memberScalarFieldEnum: {
    id_co_member: 'id_co_member',
    join_date: 'join_date',
    id_community: 'id_community',
    user_name: 'user_name'
  };

  export type Community_memberScalarFieldEnum = (typeof Community_memberScalarFieldEnum)[keyof typeof Community_memberScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    user_name: 'user_name',
    retraite: 'retraite'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id_manager: 'id_manager',
    password: 'password'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    user_name: 'user_name',
    name: 'name',
    surname: 'surname',
    address: 'address',
    birth_date: 'birth_date',
    country: 'country',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    password: 'password'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id_player: 'id_player',
    id_tour: 'id_tour',
    user_name: 'user_name'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PrizeScalarFieldEnum: {
    id_prize: 'id_prize',
    name: 'name',
    spots: 'spots',
    group_spot: 'group_spot',
    id_tour: 'id_tour',
    id_type: 'id_type',
    id_admin: 'id_admin'
  };

  export type PrizeScalarFieldEnum = (typeof PrizeScalarFieldEnum)[keyof typeof PrizeScalarFieldEnum]


  export const Prize_sponsorScalarFieldEnum: {
    id_prize_sponsor: 'id_prize_sponsor',
    id_prize: 'id_prize',
    user_name: 'user_name'
  };

  export type Prize_sponsorScalarFieldEnum = (typeof Prize_sponsorScalarFieldEnum)[keyof typeof Prize_sponsorScalarFieldEnum]


  export const SponsorScalarFieldEnum: {
    user_name: 'user_name',
    company_name: 'company_name',
    title: 'title'
  };

  export type SponsorScalarFieldEnum = (typeof SponsorScalarFieldEnum)[keyof typeof SponsorScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id_team: 'id_team',
    name: 'name',
    members: 'members',
    players: 'players',
    id_tour: 'id_tour',
    key_team: 'key_team',
    open: 'open',
    user_name: 'user_name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const Team_memberScalarFieldEnum: {
    id_team_member: 'id_team_member',
    id_team: 'id_team',
    user_name: 'user_name',
    status: 'status'
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id_tour: 'id_tour',
    location: 'location',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    avatar: 'avatar',
    id_admin: 'id_admin',
    id_community: 'id_community',
    fees: 'fees'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id_type: 'id_type',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id_admin?: IntFilter<"Admin"> | number
    id_community?: IntNullableFilter<"Admin"> | number | null
    user_name?: StringNullableFilter<"Admin"> | string | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Tournament?: TournamentListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id_admin?: SortOrder
    id_community?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    Community?: CommunityOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
    Tournament?: TournamentOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id_admin?: number
    user_name?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id_community?: IntNullableFilter<"Admin"> | number | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Tournament?: TournamentListRelationFilter
  }, "id_admin" | "user_name">

  export type AdminOrderByWithAggregationInput = {
    id_admin?: SortOrder
    id_community?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id_admin?: IntWithAggregatesFilter<"Admin"> | number
    id_community?: IntNullableWithAggregatesFilter<"Admin"> | number | null
    user_name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id_community?: IntFilter<"Community"> | number
    name?: StringNullableFilter<"Community"> | string | null
    details?: StringNullableFilter<"Community"> | string | null
    avatar?: StringNullableFilter<"Community"> | string | null
    members?: IntNullableFilter<"Community"> | number | null
    location?: StringNullableFilter<"Community"> | string | null
    id_manager?: IntNullableFilter<"Community"> | number | null
    privacy?: BoolNullableFilter<"Community"> | boolean | null
    Admin?: AdminListRelationFilter
    Manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
    Community_member?: Community_memberListRelationFilter
    Tournament?: TournamentListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id_community?: SortOrder
    name?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    id_manager?: SortOrderInput | SortOrder
    privacy?: SortOrderInput | SortOrder
    Admin?: AdminOrderByRelationAggregateInput
    Manager?: ManagerOrderByWithRelationInput
    Community_member?: Community_memberOrderByRelationAggregateInput
    Tournament?: TournamentOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id_community?: number
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringNullableFilter<"Community"> | string | null
    details?: StringNullableFilter<"Community"> | string | null
    avatar?: StringNullableFilter<"Community"> | string | null
    members?: IntNullableFilter<"Community"> | number | null
    location?: StringNullableFilter<"Community"> | string | null
    id_manager?: IntNullableFilter<"Community"> | number | null
    privacy?: BoolNullableFilter<"Community"> | boolean | null
    Admin?: AdminListRelationFilter
    Manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
    Community_member?: Community_memberListRelationFilter
    Tournament?: TournamentListRelationFilter
  }, "id_community">

  export type CommunityOrderByWithAggregationInput = {
    id_community?: SortOrder
    name?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    id_manager?: SortOrderInput | SortOrder
    privacy?: SortOrderInput | SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id_community?: IntWithAggregatesFilter<"Community"> | number
    name?: StringNullableWithAggregatesFilter<"Community"> | string | null
    details?: StringNullableWithAggregatesFilter<"Community"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Community"> | string | null
    members?: IntNullableWithAggregatesFilter<"Community"> | number | null
    location?: StringNullableWithAggregatesFilter<"Community"> | string | null
    id_manager?: IntNullableWithAggregatesFilter<"Community"> | number | null
    privacy?: BoolNullableWithAggregatesFilter<"Community"> | boolean | null
  }

  export type Community_memberWhereInput = {
    AND?: Community_memberWhereInput | Community_memberWhereInput[]
    OR?: Community_memberWhereInput[]
    NOT?: Community_memberWhereInput | Community_memberWhereInput[]
    id_co_member?: IntFilter<"Community_member"> | number
    join_date?: DateTimeNullableFilter<"Community_member"> | Date | string | null
    id_community?: IntNullableFilter<"Community_member"> | number | null
    user_name?: StringNullableFilter<"Community_member"> | string | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type Community_memberOrderByWithRelationInput = {
    id_co_member?: SortOrder
    join_date?: SortOrderInput | SortOrder
    id_community?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    Community?: CommunityOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
  }

  export type Community_memberWhereUniqueInput = Prisma.AtLeast<{
    id_co_member?: number
    AND?: Community_memberWhereInput | Community_memberWhereInput[]
    OR?: Community_memberWhereInput[]
    NOT?: Community_memberWhereInput | Community_memberWhereInput[]
    join_date?: DateTimeNullableFilter<"Community_member"> | Date | string | null
    id_community?: IntNullableFilter<"Community_member"> | number | null
    user_name?: StringNullableFilter<"Community_member"> | string | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id_co_member">

  export type Community_memberOrderByWithAggregationInput = {
    id_co_member?: SortOrder
    join_date?: SortOrderInput | SortOrder
    id_community?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    _count?: Community_memberCountOrderByAggregateInput
    _avg?: Community_memberAvgOrderByAggregateInput
    _max?: Community_memberMaxOrderByAggregateInput
    _min?: Community_memberMinOrderByAggregateInput
    _sum?: Community_memberSumOrderByAggregateInput
  }

  export type Community_memberScalarWhereWithAggregatesInput = {
    AND?: Community_memberScalarWhereWithAggregatesInput | Community_memberScalarWhereWithAggregatesInput[]
    OR?: Community_memberScalarWhereWithAggregatesInput[]
    NOT?: Community_memberScalarWhereWithAggregatesInput | Community_memberScalarWhereWithAggregatesInput[]
    id_co_member?: IntWithAggregatesFilter<"Community_member"> | number
    join_date?: DateTimeNullableWithAggregatesFilter<"Community_member"> | Date | string | null
    id_community?: IntNullableWithAggregatesFilter<"Community_member"> | number | null
    user_name?: StringNullableWithAggregatesFilter<"Community_member"> | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    user_name?: StringFilter<"Employee"> | string
    retraite?: BoolNullableFilter<"Employee"> | boolean | null
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    user_name?: SortOrder
    retraite?: SortOrderInput | SortOrder
    Member?: MemberOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    user_name?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    retraite?: BoolNullableFilter<"Employee"> | boolean | null
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "user_name">

  export type EmployeeOrderByWithAggregationInput = {
    user_name?: SortOrder
    retraite?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    user_name?: StringWithAggregatesFilter<"Employee"> | string
    retraite?: BoolNullableWithAggregatesFilter<"Employee"> | boolean | null
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id_manager?: IntFilter<"Manager"> | number
    password?: StringNullableFilter<"Manager"> | string | null
    Community?: CommunityListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id_manager?: SortOrder
    password?: SortOrderInput | SortOrder
    Community?: CommunityOrderByRelationAggregateInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id_manager?: number
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    password?: StringNullableFilter<"Manager"> | string | null
    Community?: CommunityListRelationFilter
  }, "id_manager">

  export type ManagerOrderByWithAggregationInput = {
    id_manager?: SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id_manager?: IntWithAggregatesFilter<"Manager"> | number
    password?: StringNullableWithAggregatesFilter<"Manager"> | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    user_name?: StringFilter<"Member"> | string
    name?: StringNullableFilter<"Member"> | string | null
    surname?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    birth_date?: DateTimeNullableFilter<"Member"> | Date | string | null
    country?: StringNullableFilter<"Member"> | string | null
    email?: StringNullableFilter<"Member"> | string | null
    phone?: StringNullableFilter<"Member"> | string | null
    avatar?: StringNullableFilter<"Member"> | string | null
    password?: StringNullableFilter<"Member"> | string | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Community_member?: Community_memberListRelationFilter
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Player?: PlayerListRelationFilter
    Sponsor?: XOR<SponsorNullableScalarRelationFilter, SponsorWhereInput> | null
    Team?: TeamListRelationFilter
    Team_member?: Team_memberListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    user_name?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Admin?: AdminOrderByWithRelationInput
    Community_member?: Community_memberOrderByRelationAggregateInput
    Employee?: EmployeeOrderByWithRelationInput
    Player?: PlayerOrderByRelationAggregateInput
    Sponsor?: SponsorOrderByWithRelationInput
    Team?: TeamOrderByRelationAggregateInput
    Team_member?: Team_memberOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    user_name?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringNullableFilter<"Member"> | string | null
    surname?: StringNullableFilter<"Member"> | string | null
    address?: StringNullableFilter<"Member"> | string | null
    birth_date?: DateTimeNullableFilter<"Member"> | Date | string | null
    country?: StringNullableFilter<"Member"> | string | null
    email?: StringNullableFilter<"Member"> | string | null
    phone?: StringNullableFilter<"Member"> | string | null
    avatar?: StringNullableFilter<"Member"> | string | null
    password?: StringNullableFilter<"Member"> | string | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Community_member?: Community_memberListRelationFilter
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Player?: PlayerListRelationFilter
    Sponsor?: XOR<SponsorNullableScalarRelationFilter, SponsorWhereInput> | null
    Team?: TeamListRelationFilter
    Team_member?: Team_memberListRelationFilter
  }, "user_name">

  export type MemberOrderByWithAggregationInput = {
    user_name?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    user_name?: StringWithAggregatesFilter<"Member"> | string
    name?: StringNullableWithAggregatesFilter<"Member"> | string | null
    surname?: StringNullableWithAggregatesFilter<"Member"> | string | null
    address?: StringNullableWithAggregatesFilter<"Member"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"Member"> | string | null
    email?: StringNullableWithAggregatesFilter<"Member"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Member"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Member"> | string | null
    password?: StringNullableWithAggregatesFilter<"Member"> | string | null
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id_player?: IntFilter<"Player"> | number
    id_tour?: IntNullableFilter<"Player"> | number | null
    user_name?: StringNullableFilter<"Player"> | string | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }

  export type PlayerOrderByWithRelationInput = {
    id_player?: SortOrder
    id_tour?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    Member?: MemberOrderByWithRelationInput
    Tournament?: TournamentOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id_player?: number
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id_tour?: IntNullableFilter<"Player"> | number | null
    user_name?: StringNullableFilter<"Player"> | string | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }, "id_player">

  export type PlayerOrderByWithAggregationInput = {
    id_player?: SortOrder
    id_tour?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id_player?: IntWithAggregatesFilter<"Player"> | number
    id_tour?: IntNullableWithAggregatesFilter<"Player"> | number | null
    user_name?: StringNullableWithAggregatesFilter<"Player"> | string | null
  }

  export type PrizeWhereInput = {
    AND?: PrizeWhereInput | PrizeWhereInput[]
    OR?: PrizeWhereInput[]
    NOT?: PrizeWhereInput | PrizeWhereInput[]
    id_prize?: IntFilter<"Prize"> | number
    name?: StringNullableFilter<"Prize"> | string | null
    spots?: IntNullableFilter<"Prize"> | number | null
    group_spot?: IntNullableFilter<"Prize"> | number | null
    id_tour?: IntNullableFilter<"Prize"> | number | null
    id_type?: IntNullableFilter<"Prize"> | number | null
    id_admin?: IntNullableFilter<"Prize"> | number | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    Type?: XOR<TypeNullableScalarRelationFilter, TypeWhereInput> | null
    Prize_sponsor?: Prize_sponsorListRelationFilter
  }

  export type PrizeOrderByWithRelationInput = {
    id_prize?: SortOrder
    name?: SortOrderInput | SortOrder
    spots?: SortOrderInput | SortOrder
    group_spot?: SortOrderInput | SortOrder
    id_tour?: SortOrderInput | SortOrder
    id_type?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    Type?: TypeOrderByWithRelationInput
    Prize_sponsor?: Prize_sponsorOrderByRelationAggregateInput
  }

  export type PrizeWhereUniqueInput = Prisma.AtLeast<{
    id_prize?: number
    AND?: PrizeWhereInput | PrizeWhereInput[]
    OR?: PrizeWhereInput[]
    NOT?: PrizeWhereInput | PrizeWhereInput[]
    name?: StringNullableFilter<"Prize"> | string | null
    spots?: IntNullableFilter<"Prize"> | number | null
    group_spot?: IntNullableFilter<"Prize"> | number | null
    id_tour?: IntNullableFilter<"Prize"> | number | null
    id_type?: IntNullableFilter<"Prize"> | number | null
    id_admin?: IntNullableFilter<"Prize"> | number | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    Type?: XOR<TypeNullableScalarRelationFilter, TypeWhereInput> | null
    Prize_sponsor?: Prize_sponsorListRelationFilter
  }, "id_prize">

  export type PrizeOrderByWithAggregationInput = {
    id_prize?: SortOrder
    name?: SortOrderInput | SortOrder
    spots?: SortOrderInput | SortOrder
    group_spot?: SortOrderInput | SortOrder
    id_tour?: SortOrderInput | SortOrder
    id_type?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    _count?: PrizeCountOrderByAggregateInput
    _avg?: PrizeAvgOrderByAggregateInput
    _max?: PrizeMaxOrderByAggregateInput
    _min?: PrizeMinOrderByAggregateInput
    _sum?: PrizeSumOrderByAggregateInput
  }

  export type PrizeScalarWhereWithAggregatesInput = {
    AND?: PrizeScalarWhereWithAggregatesInput | PrizeScalarWhereWithAggregatesInput[]
    OR?: PrizeScalarWhereWithAggregatesInput[]
    NOT?: PrizeScalarWhereWithAggregatesInput | PrizeScalarWhereWithAggregatesInput[]
    id_prize?: IntWithAggregatesFilter<"Prize"> | number
    name?: StringNullableWithAggregatesFilter<"Prize"> | string | null
    spots?: IntNullableWithAggregatesFilter<"Prize"> | number | null
    group_spot?: IntNullableWithAggregatesFilter<"Prize"> | number | null
    id_tour?: IntNullableWithAggregatesFilter<"Prize"> | number | null
    id_type?: IntNullableWithAggregatesFilter<"Prize"> | number | null
    id_admin?: IntNullableWithAggregatesFilter<"Prize"> | number | null
  }

  export type Prize_sponsorWhereInput = {
    AND?: Prize_sponsorWhereInput | Prize_sponsorWhereInput[]
    OR?: Prize_sponsorWhereInput[]
    NOT?: Prize_sponsorWhereInput | Prize_sponsorWhereInput[]
    id_prize_sponsor?: IntFilter<"Prize_sponsor"> | number
    id_prize?: IntNullableFilter<"Prize_sponsor"> | number | null
    user_name?: StringNullableFilter<"Prize_sponsor"> | string | null
    Prize?: XOR<PrizeNullableScalarRelationFilter, PrizeWhereInput> | null
    Sponsor?: XOR<SponsorNullableScalarRelationFilter, SponsorWhereInput> | null
  }

  export type Prize_sponsorOrderByWithRelationInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    Prize?: PrizeOrderByWithRelationInput
    Sponsor?: SponsorOrderByWithRelationInput
  }

  export type Prize_sponsorWhereUniqueInput = Prisma.AtLeast<{
    id_prize_sponsor?: number
    AND?: Prize_sponsorWhereInput | Prize_sponsorWhereInput[]
    OR?: Prize_sponsorWhereInput[]
    NOT?: Prize_sponsorWhereInput | Prize_sponsorWhereInput[]
    id_prize?: IntNullableFilter<"Prize_sponsor"> | number | null
    user_name?: StringNullableFilter<"Prize_sponsor"> | string | null
    Prize?: XOR<PrizeNullableScalarRelationFilter, PrizeWhereInput> | null
    Sponsor?: XOR<SponsorNullableScalarRelationFilter, SponsorWhereInput> | null
  }, "id_prize_sponsor">

  export type Prize_sponsorOrderByWithAggregationInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    _count?: Prize_sponsorCountOrderByAggregateInput
    _avg?: Prize_sponsorAvgOrderByAggregateInput
    _max?: Prize_sponsorMaxOrderByAggregateInput
    _min?: Prize_sponsorMinOrderByAggregateInput
    _sum?: Prize_sponsorSumOrderByAggregateInput
  }

  export type Prize_sponsorScalarWhereWithAggregatesInput = {
    AND?: Prize_sponsorScalarWhereWithAggregatesInput | Prize_sponsorScalarWhereWithAggregatesInput[]
    OR?: Prize_sponsorScalarWhereWithAggregatesInput[]
    NOT?: Prize_sponsorScalarWhereWithAggregatesInput | Prize_sponsorScalarWhereWithAggregatesInput[]
    id_prize_sponsor?: IntWithAggregatesFilter<"Prize_sponsor"> | number
    id_prize?: IntNullableWithAggregatesFilter<"Prize_sponsor"> | number | null
    user_name?: StringNullableWithAggregatesFilter<"Prize_sponsor"> | string | null
  }

  export type SponsorWhereInput = {
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    user_name?: StringFilter<"Sponsor"> | string
    company_name?: StringNullableFilter<"Sponsor"> | string | null
    title?: StringNullableFilter<"Sponsor"> | string | null
    Prize_sponsor?: Prize_sponsorListRelationFilter
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type SponsorOrderByWithRelationInput = {
    user_name?: SortOrder
    company_name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    Prize_sponsor?: Prize_sponsorOrderByRelationAggregateInput
    Member?: MemberOrderByWithRelationInput
  }

  export type SponsorWhereUniqueInput = Prisma.AtLeast<{
    user_name?: string
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    company_name?: StringNullableFilter<"Sponsor"> | string | null
    title?: StringNullableFilter<"Sponsor"> | string | null
    Prize_sponsor?: Prize_sponsorListRelationFilter
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "user_name">

  export type SponsorOrderByWithAggregationInput = {
    user_name?: SortOrder
    company_name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: SponsorCountOrderByAggregateInput
    _max?: SponsorMaxOrderByAggregateInput
    _min?: SponsorMinOrderByAggregateInput
  }

  export type SponsorScalarWhereWithAggregatesInput = {
    AND?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    OR?: SponsorScalarWhereWithAggregatesInput[]
    NOT?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    user_name?: StringWithAggregatesFilter<"Sponsor"> | string
    company_name?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    title?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id_team?: IntFilter<"Team"> | number
    name?: StringNullableFilter<"Team"> | string | null
    members?: IntNullableFilter<"Team"> | number | null
    players?: IntNullableFilter<"Team"> | number | null
    id_tour?: IntNullableFilter<"Team"> | number | null
    key_team?: StringNullableFilter<"Team"> | string | null
    open?: BoolNullableFilter<"Team"> | boolean | null
    user_name?: StringNullableFilter<"Team"> | string | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Team_member?: Team_memberListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id_team?: SortOrder
    name?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    players?: SortOrderInput | SortOrder
    id_tour?: SortOrderInput | SortOrder
    key_team?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
    Team_member?: Team_memberOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id_team?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringNullableFilter<"Team"> | string | null
    members?: IntNullableFilter<"Team"> | number | null
    players?: IntNullableFilter<"Team"> | number | null
    id_tour?: IntNullableFilter<"Team"> | number | null
    key_team?: StringNullableFilter<"Team"> | string | null
    open?: BoolNullableFilter<"Team"> | boolean | null
    user_name?: StringNullableFilter<"Team"> | string | null
    Tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Team_member?: Team_memberListRelationFilter
  }, "id_team">

  export type TeamOrderByWithAggregationInput = {
    id_team?: SortOrder
    name?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    players?: SortOrderInput | SortOrder
    id_tour?: SortOrderInput | SortOrder
    key_team?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id_team?: IntWithAggregatesFilter<"Team"> | number
    name?: StringNullableWithAggregatesFilter<"Team"> | string | null
    members?: IntNullableWithAggregatesFilter<"Team"> | number | null
    players?: IntNullableWithAggregatesFilter<"Team"> | number | null
    id_tour?: IntNullableWithAggregatesFilter<"Team"> | number | null
    key_team?: StringNullableWithAggregatesFilter<"Team"> | string | null
    open?: BoolNullableWithAggregatesFilter<"Team"> | boolean | null
    user_name?: StringNullableWithAggregatesFilter<"Team"> | string | null
  }

  export type Team_memberWhereInput = {
    AND?: Team_memberWhereInput | Team_memberWhereInput[]
    OR?: Team_memberWhereInput[]
    NOT?: Team_memberWhereInput | Team_memberWhereInput[]
    id_team_member?: IntFilter<"Team_member"> | number
    id_team?: IntNullableFilter<"Team_member"> | number | null
    user_name?: StringNullableFilter<"Team_member"> | string | null
    status?: BoolNullableFilter<"Team_member"> | boolean | null
    Team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type Team_memberOrderByWithRelationInput = {
    id_team_member?: SortOrder
    id_team?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    Team?: TeamOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
  }

  export type Team_memberWhereUniqueInput = Prisma.AtLeast<{
    id_team_member?: number
    AND?: Team_memberWhereInput | Team_memberWhereInput[]
    OR?: Team_memberWhereInput[]
    NOT?: Team_memberWhereInput | Team_memberWhereInput[]
    id_team?: IntNullableFilter<"Team_member"> | number | null
    user_name?: StringNullableFilter<"Team_member"> | string | null
    status?: BoolNullableFilter<"Team_member"> | boolean | null
    Team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id_team_member">

  export type Team_memberOrderByWithAggregationInput = {
    id_team_member?: SortOrder
    id_team?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: Team_memberCountOrderByAggregateInput
    _avg?: Team_memberAvgOrderByAggregateInput
    _max?: Team_memberMaxOrderByAggregateInput
    _min?: Team_memberMinOrderByAggregateInput
    _sum?: Team_memberSumOrderByAggregateInput
  }

  export type Team_memberScalarWhereWithAggregatesInput = {
    AND?: Team_memberScalarWhereWithAggregatesInput | Team_memberScalarWhereWithAggregatesInput[]
    OR?: Team_memberScalarWhereWithAggregatesInput[]
    NOT?: Team_memberScalarWhereWithAggregatesInput | Team_memberScalarWhereWithAggregatesInput[]
    id_team_member?: IntWithAggregatesFilter<"Team_member"> | number
    id_team?: IntNullableWithAggregatesFilter<"Team_member"> | number | null
    user_name?: StringNullableWithAggregatesFilter<"Team_member"> | string | null
    status?: BoolNullableWithAggregatesFilter<"Team_member"> | boolean | null
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id_tour?: IntFilter<"Tournament"> | number
    location?: StringNullableFilter<"Tournament"> | string | null
    start_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    status?: IntNullableFilter<"Tournament"> | number | null
    avatar?: StringNullableFilter<"Tournament"> | string | null
    id_admin?: IntNullableFilter<"Tournament"> | number | null
    id_community?: IntNullableFilter<"Tournament"> | number | null
    fees?: FloatNullableFilter<"Tournament"> | number | null
    Player?: PlayerListRelationFilter
    Prize?: PrizeListRelationFilter
    Team?: TeamListRelationFilter
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
  }

  export type TournamentOrderByWithRelationInput = {
    id_tour?: SortOrder
    location?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    id_community?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    Player?: PlayerOrderByRelationAggregateInput
    Prize?: PrizeOrderByRelationAggregateInput
    Team?: TeamOrderByRelationAggregateInput
    Admin?: AdminOrderByWithRelationInput
    Community?: CommunityOrderByWithRelationInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id_tour?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    location?: StringNullableFilter<"Tournament"> | string | null
    start_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    status?: IntNullableFilter<"Tournament"> | number | null
    avatar?: StringNullableFilter<"Tournament"> | string | null
    id_admin?: IntNullableFilter<"Tournament"> | number | null
    id_community?: IntNullableFilter<"Tournament"> | number | null
    fees?: FloatNullableFilter<"Tournament"> | number | null
    Player?: PlayerListRelationFilter
    Prize?: PrizeListRelationFilter
    Team?: TeamListRelationFilter
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
  }, "id_tour">

  export type TournamentOrderByWithAggregationInput = {
    id_tour?: SortOrder
    location?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    id_community?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id_tour?: IntWithAggregatesFilter<"Tournament"> | number
    location?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    status?: IntNullableWithAggregatesFilter<"Tournament"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    id_admin?: IntNullableWithAggregatesFilter<"Tournament"> | number | null
    id_community?: IntNullableWithAggregatesFilter<"Tournament"> | number | null
    fees?: FloatNullableWithAggregatesFilter<"Tournament"> | number | null
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id_type?: IntFilter<"Type"> | number
    name?: StringNullableFilter<"Type"> | string | null
    Prize?: PrizeListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id_type?: SortOrder
    name?: SortOrderInput | SortOrder
    Prize?: PrizeOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id_type?: number
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    name?: StringNullableFilter<"Type"> | string | null
    Prize?: PrizeListRelationFilter
  }, "id_type">

  export type TypeOrderByWithAggregationInput = {
    id_type?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id_type?: IntWithAggregatesFilter<"Type"> | number
    name?: StringNullableWithAggregatesFilter<"Type"> | string | null
  }

  export type AdminCreateInput = {
    Community?: CommunityCreateNestedOneWithoutAdminInput
    Member?: MemberCreateNestedOneWithoutAdminInput
    Tournament?: TournamentCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id_admin?: number
    id_community?: number | null
    user_name?: string | null
    Tournament?: TournamentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    Community?: CommunityUpdateOneWithoutAdminNestedInput
    Member?: MemberUpdateOneWithoutAdminNestedInput
    Tournament?: TournamentUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    Tournament?: TournamentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id_community?: number | null
    user_name?: string | null
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunityCreateInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Admin?: AdminCreateNestedManyWithoutCommunityInput
    Manager?: ManagerCreateNestedOneWithoutCommunityInput
    Community_member?: Community_memberCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id_community?: number
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    id_manager?: number | null
    privacy?: boolean | null
    Admin?: AdminUncheckedCreateNestedManyWithoutCommunityInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateManyWithoutCommunityNestedInput
    Manager?: ManagerUpdateOneWithoutCommunityNestedInput
    Community_member?: Community_memberUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    id_manager?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateManyWithoutCommunityNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    id_manager?: number | null
    privacy?: boolean | null
  }

  export type CommunityUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommunityUncheckedUpdateManyInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    id_manager?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Community_memberCreateInput = {
    join_date?: Date | string | null
    Community?: CommunityCreateNestedOneWithoutCommunity_memberInput
    Member?: MemberCreateNestedOneWithoutCommunity_memberInput
  }

  export type Community_memberUncheckedCreateInput = {
    id_co_member?: number
    join_date?: Date | string | null
    id_community?: number | null
    user_name?: string | null
  }

  export type Community_memberUpdateInput = {
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Community?: CommunityUpdateOneWithoutCommunity_memberNestedInput
    Member?: MemberUpdateOneWithoutCommunity_memberNestedInput
  }

  export type Community_memberUncheckedUpdateInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Community_memberCreateManyInput = {
    join_date?: Date | string | null
    id_community?: number | null
    user_name?: string | null
  }

  export type Community_memberUpdateManyMutationInput = {
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Community_memberUncheckedUpdateManyInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateInput = {
    retraite?: boolean | null
    Member: MemberCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    user_name: string
    retraite?: boolean | null
  }

  export type EmployeeUpdateInput = {
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Member?: MemberUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EmployeeCreateManyInput = {
    user_name: string
    retraite?: boolean | null
  }

  export type EmployeeUpdateManyMutationInput = {
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ManagerCreateInput = {
    password?: string | null
    Community?: CommunityCreateNestedManyWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id_manager?: number
    password?: string | null
    Community?: CommunityUncheckedCreateNestedManyWithoutManagerInput
  }

  export type ManagerUpdateInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Community?: CommunityUpdateManyWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id_manager?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Community?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ManagerCreateManyInput = {
    password?: string | null
  }

  export type ManagerUpdateManyMutationInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManagerUncheckedUpdateManyInput = {
    id_manager?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
  }

  export type MemberUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUncheckedUpdateManyInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerCreateInput = {
    Member?: MemberCreateNestedOneWithoutPlayerInput
    Tournament?: TournamentCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id_player?: number
    id_tour?: number | null
    user_name?: string | null
  }

  export type PlayerUpdateInput = {
    Member?: MemberUpdateOneWithoutPlayerNestedInput
    Tournament?: TournamentUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerCreateManyInput = {
    id_tour?: number | null
    user_name?: string | null
  }

  export type PlayerUpdateManyMutationInput = {

  }

  export type PlayerUncheckedUpdateManyInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrizeCreateInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_admin?: number | null
    Tournament?: TournamentCreateNestedOneWithoutPrizeInput
    Type?: TypeCreateNestedOneWithoutPrizeInput
    Prize_sponsor?: Prize_sponsorCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUncheckedCreateInput = {
    id_prize?: number
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_tour?: number | null
    id_type?: number | null
    id_admin?: number | null
    Prize_sponsor?: Prize_sponsorUncheckedCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Tournament?: TournamentUpdateOneWithoutPrizeNestedInput
    Type?: TypeUpdateOneWithoutPrizeNestedInput
    Prize_sponsor?: Prize_sponsorUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    id_type?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Prize_sponsor?: Prize_sponsorUncheckedUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeCreateManyInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_tour?: number | null
    id_type?: number | null
    id_admin?: number | null
  }

  export type PrizeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PrizeUncheckedUpdateManyInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    id_type?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Prize_sponsorCreateInput = {
    Prize?: PrizeCreateNestedOneWithoutPrize_sponsorInput
    Sponsor?: SponsorCreateNestedOneWithoutPrize_sponsorInput
  }

  export type Prize_sponsorUncheckedCreateInput = {
    id_prize_sponsor?: number
    id_prize?: number | null
    user_name?: string | null
  }

  export type Prize_sponsorUpdateInput = {
    Prize?: PrizeUpdateOneWithoutPrize_sponsorNestedInput
    Sponsor?: SponsorUpdateOneWithoutPrize_sponsorNestedInput
  }

  export type Prize_sponsorUncheckedUpdateInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    id_prize?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prize_sponsorCreateManyInput = {
    id_prize?: number | null
    user_name?: string | null
  }

  export type Prize_sponsorUpdateManyMutationInput = {

  }

  export type Prize_sponsorUncheckedUpdateManyInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    id_prize?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SponsorCreateInput = {
    company_name?: string | null
    title?: string | null
    Prize_sponsor?: Prize_sponsorCreateNestedManyWithoutSponsorInput
    Member: MemberCreateNestedOneWithoutSponsorInput
  }

  export type SponsorUncheckedCreateInput = {
    user_name: string
    company_name?: string | null
    title?: string | null
    Prize_sponsor?: Prize_sponsorUncheckedCreateNestedManyWithoutSponsorInput
  }

  export type SponsorUpdateInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    Prize_sponsor?: Prize_sponsorUpdateManyWithoutSponsorNestedInput
    Member?: MemberUpdateOneRequiredWithoutSponsorNestedInput
  }

  export type SponsorUncheckedUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    Prize_sponsor?: Prize_sponsorUncheckedUpdateManyWithoutSponsorNestedInput
  }

  export type SponsorCreateManyInput = {
    user_name: string
    company_name?: string | null
    title?: string | null
  }

  export type SponsorUpdateManyMutationInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SponsorUncheckedUpdateManyInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    Tournament?: TournamentCreateNestedOneWithoutTeamInput
    Member?: MemberCreateNestedOneWithoutTeamInput
    Team_member?: Team_memberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id_team?: number
    name?: string | null
    members?: number | null
    players?: number | null
    id_tour?: number | null
    key_team?: string | null
    open?: boolean | null
    user_name?: string | null
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tournament?: TournamentUpdateOneWithoutTeamNestedInput
    Member?: MemberUpdateOneWithoutTeamNestedInput
    Team_member?: Team_memberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    Team_member?: Team_memberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    id_tour?: number | null
    key_team?: string | null
    open?: boolean | null
    user_name?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TeamUncheckedUpdateManyInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Team_memberCreateInput = {
    status?: boolean | null
    Team?: TeamCreateNestedOneWithoutTeam_memberInput
    Member?: MemberCreateNestedOneWithoutTeam_memberInput
  }

  export type Team_memberUncheckedCreateInput = {
    id_team_member?: number
    id_team?: number | null
    user_name?: string | null
    status?: boolean | null
  }

  export type Team_memberUpdateInput = {
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Team?: TeamUpdateOneWithoutTeam_memberNestedInput
    Member?: MemberUpdateOneWithoutTeam_memberNestedInput
  }

  export type Team_memberUncheckedUpdateInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    id_team?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Team_memberCreateManyInput = {
    id_team?: number | null
    user_name?: string | null
    status?: boolean | null
  }

  export type Team_memberUpdateManyMutationInput = {
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Team_memberUncheckedUpdateManyInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    id_team?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TournamentCreateInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Player?: PlayerCreateNestedManyWithoutTournamentInput
    Prize?: PrizeCreateNestedManyWithoutTournamentInput
    Team?: TeamCreateNestedManyWithoutTournamentInput
    Admin?: AdminCreateNestedOneWithoutTournamentInput
    Community?: CommunityCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    id_community?: number | null
    fees?: number | null
    Player?: PlayerUncheckedCreateNestedManyWithoutTournamentInput
    Prize?: PrizeUncheckedCreateNestedManyWithoutTournamentInput
    Team?: TeamUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUpdateManyWithoutTournamentNestedInput
    Team?: TeamUpdateManyWithoutTournamentNestedInput
    Admin?: AdminUpdateOneWithoutTournamentNestedInput
    Community?: CommunityUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUncheckedUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUncheckedUpdateManyWithoutTournamentNestedInput
    Team?: TeamUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    id_community?: number | null
    fees?: number | null
  }

  export type TournamentUpdateManyMutationInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TournamentUncheckedUpdateManyInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TypeCreateInput = {
    name?: string | null
    Prize?: PrizeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id_type?: number
    name?: string | null
    Prize?: PrizeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Prize?: PrizeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Prize?: PrizeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    name?: string | null
  }

  export type TypeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TypeUncheckedUpdateManyInput = {
    id_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommunityNullableScalarRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id_admin?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id_admin?: SortOrder
    id_community?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id_admin?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id_admin?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id_admin?: SortOrder
    id_community?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type ManagerNullableScalarRelationFilter = {
    is?: ManagerWhereInput | null
    isNot?: ManagerWhereInput | null
  }

  export type Community_memberListRelationFilter = {
    every?: Community_memberWhereInput
    some?: Community_memberWhereInput
    none?: Community_memberWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Community_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id_community?: SortOrder
    name?: SortOrder
    details?: SortOrder
    avatar?: SortOrder
    members?: SortOrder
    location?: SortOrder
    id_manager?: SortOrder
    privacy?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id_community?: SortOrder
    members?: SortOrder
    id_manager?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id_community?: SortOrder
    name?: SortOrder
    details?: SortOrder
    avatar?: SortOrder
    members?: SortOrder
    location?: SortOrder
    id_manager?: SortOrder
    privacy?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id_community?: SortOrder
    name?: SortOrder
    details?: SortOrder
    avatar?: SortOrder
    members?: SortOrder
    location?: SortOrder
    id_manager?: SortOrder
    privacy?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id_community?: SortOrder
    members?: SortOrder
    id_manager?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Community_memberCountOrderByAggregateInput = {
    id_co_member?: SortOrder
    join_date?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type Community_memberAvgOrderByAggregateInput = {
    id_co_member?: SortOrder
    id_community?: SortOrder
  }

  export type Community_memberMaxOrderByAggregateInput = {
    id_co_member?: SortOrder
    join_date?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type Community_memberMinOrderByAggregateInput = {
    id_co_member?: SortOrder
    join_date?: SortOrder
    id_community?: SortOrder
    user_name?: SortOrder
  }

  export type Community_memberSumOrderByAggregateInput = {
    id_co_member?: SortOrder
    id_community?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    user_name?: SortOrder
    retraite?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    user_name?: SortOrder
    retraite?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    user_name?: SortOrder
    retraite?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id_manager?: SortOrder
    password?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id_manager?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id_manager?: SortOrder
    password?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id_manager?: SortOrder
    password?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
    id_manager?: SortOrder
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type SponsorNullableScalarRelationFilter = {
    is?: SponsorWhereInput | null
    isNot?: SponsorWhereInput | null
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type Team_memberListRelationFilter = {
    every?: Team_memberWhereInput
    some?: Team_memberWhereInput
    none?: Team_memberWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    user_name?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    address?: SortOrder
    birth_date?: SortOrder
    country?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    user_name?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    address?: SortOrder
    birth_date?: SortOrder
    country?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    user_name?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    address?: SortOrder
    birth_date?: SortOrder
    country?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type PlayerCountOrderByAggregateInput = {
    id_player?: SortOrder
    id_tour?: SortOrder
    user_name?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id_player?: SortOrder
    id_tour?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id_player?: SortOrder
    id_tour?: SortOrder
    user_name?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id_player?: SortOrder
    id_tour?: SortOrder
    user_name?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id_player?: SortOrder
    id_tour?: SortOrder
  }

  export type TypeNullableScalarRelationFilter = {
    is?: TypeWhereInput | null
    isNot?: TypeWhereInput | null
  }

  export type Prize_sponsorListRelationFilter = {
    every?: Prize_sponsorWhereInput
    some?: Prize_sponsorWhereInput
    none?: Prize_sponsorWhereInput
  }

  export type Prize_sponsorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrizeCountOrderByAggregateInput = {
    id_prize?: SortOrder
    name?: SortOrder
    spots?: SortOrder
    group_spot?: SortOrder
    id_tour?: SortOrder
    id_type?: SortOrder
    id_admin?: SortOrder
  }

  export type PrizeAvgOrderByAggregateInput = {
    id_prize?: SortOrder
    spots?: SortOrder
    group_spot?: SortOrder
    id_tour?: SortOrder
    id_type?: SortOrder
    id_admin?: SortOrder
  }

  export type PrizeMaxOrderByAggregateInput = {
    id_prize?: SortOrder
    name?: SortOrder
    spots?: SortOrder
    group_spot?: SortOrder
    id_tour?: SortOrder
    id_type?: SortOrder
    id_admin?: SortOrder
  }

  export type PrizeMinOrderByAggregateInput = {
    id_prize?: SortOrder
    name?: SortOrder
    spots?: SortOrder
    group_spot?: SortOrder
    id_tour?: SortOrder
    id_type?: SortOrder
    id_admin?: SortOrder
  }

  export type PrizeSumOrderByAggregateInput = {
    id_prize?: SortOrder
    spots?: SortOrder
    group_spot?: SortOrder
    id_tour?: SortOrder
    id_type?: SortOrder
    id_admin?: SortOrder
  }

  export type PrizeNullableScalarRelationFilter = {
    is?: PrizeWhereInput | null
    isNot?: PrizeWhereInput | null
  }

  export type Prize_sponsorCountOrderByAggregateInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrder
    user_name?: SortOrder
  }

  export type Prize_sponsorAvgOrderByAggregateInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrder
  }

  export type Prize_sponsorMaxOrderByAggregateInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrder
    user_name?: SortOrder
  }

  export type Prize_sponsorMinOrderByAggregateInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrder
    user_name?: SortOrder
  }

  export type Prize_sponsorSumOrderByAggregateInput = {
    id_prize_sponsor?: SortOrder
    id_prize?: SortOrder
  }

  export type SponsorCountOrderByAggregateInput = {
    user_name?: SortOrder
    company_name?: SortOrder
    title?: SortOrder
  }

  export type SponsorMaxOrderByAggregateInput = {
    user_name?: SortOrder
    company_name?: SortOrder
    title?: SortOrder
  }

  export type SponsorMinOrderByAggregateInput = {
    user_name?: SortOrder
    company_name?: SortOrder
    title?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id_team?: SortOrder
    name?: SortOrder
    members?: SortOrder
    players?: SortOrder
    id_tour?: SortOrder
    key_team?: SortOrder
    open?: SortOrder
    user_name?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id_team?: SortOrder
    members?: SortOrder
    players?: SortOrder
    id_tour?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id_team?: SortOrder
    name?: SortOrder
    members?: SortOrder
    players?: SortOrder
    id_tour?: SortOrder
    key_team?: SortOrder
    open?: SortOrder
    user_name?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id_team?: SortOrder
    name?: SortOrder
    members?: SortOrder
    players?: SortOrder
    id_tour?: SortOrder
    key_team?: SortOrder
    open?: SortOrder
    user_name?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id_team?: SortOrder
    members?: SortOrder
    players?: SortOrder
    id_tour?: SortOrder
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type Team_memberCountOrderByAggregateInput = {
    id_team_member?: SortOrder
    id_team?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
  }

  export type Team_memberAvgOrderByAggregateInput = {
    id_team_member?: SortOrder
    id_team?: SortOrder
  }

  export type Team_memberMaxOrderByAggregateInput = {
    id_team_member?: SortOrder
    id_team?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
  }

  export type Team_memberMinOrderByAggregateInput = {
    id_team_member?: SortOrder
    id_team?: SortOrder
    user_name?: SortOrder
    status?: SortOrder
  }

  export type Team_memberSumOrderByAggregateInput = {
    id_team_member?: SortOrder
    id_team?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PrizeListRelationFilter = {
    every?: PrizeWhereInput
    some?: PrizeWhereInput
    none?: PrizeWhereInput
  }

  export type PrizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id_tour?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    id_admin?: SortOrder
    id_community?: SortOrder
    fees?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id_tour?: SortOrder
    status?: SortOrder
    id_admin?: SortOrder
    id_community?: SortOrder
    fees?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id_tour?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    id_admin?: SortOrder
    id_community?: SortOrder
    fees?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id_tour?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    id_admin?: SortOrder
    id_community?: SortOrder
    fees?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id_tour?: SortOrder
    status?: SortOrder
    id_admin?: SortOrder
    id_community?: SortOrder
    fees?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TypeCountOrderByAggregateInput = {
    id_type?: SortOrder
    name?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id_type?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id_type?: SortOrder
    name?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id_type?: SortOrder
    name?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id_type?: SortOrder
  }

  export type CommunityCreateNestedOneWithoutAdminInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput
    connect?: CommunityWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutAdminInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput
    connect?: MemberWhereUniqueInput
  }

  export type TournamentCreateNestedManyWithoutAdminInput = {
    create?: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput> | TournamentCreateWithoutAdminInput[] | TournamentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutAdminInput | TournamentCreateOrConnectWithoutAdminInput[]
    createMany?: TournamentCreateManyAdminInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput> | TournamentCreateWithoutAdminInput[] | TournamentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutAdminInput | TournamentCreateOrConnectWithoutAdminInput[]
    createMany?: TournamentCreateManyAdminInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type CommunityUpdateOneWithoutAdminNestedInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput
    upsert?: CommunityUpsertWithoutAdminInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutAdminInput, CommunityUpdateWithoutAdminInput>, CommunityUncheckedUpdateWithoutAdminInput>
  }

  export type MemberUpdateOneWithoutAdminNestedInput = {
    create?: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAdminInput
    upsert?: MemberUpsertWithoutAdminInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAdminInput, MemberUpdateWithoutAdminInput>, MemberUncheckedUpdateWithoutAdminInput>
  }

  export type TournamentUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput> | TournamentCreateWithoutAdminInput[] | TournamentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutAdminInput | TournamentCreateOrConnectWithoutAdminInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutAdminInput | TournamentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TournamentCreateManyAdminInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutAdminInput | TournamentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutAdminInput | TournamentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TournamentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput> | TournamentCreateWithoutAdminInput[] | TournamentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutAdminInput | TournamentCreateOrConnectWithoutAdminInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutAdminInput | TournamentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TournamentCreateManyAdminInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutAdminInput | TournamentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutAdminInput | TournamentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type AdminCreateNestedManyWithoutCommunityInput = {
    create?: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput> | AdminCreateWithoutCommunityInput[] | AdminUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutCommunityInput | AdminCreateOrConnectWithoutCommunityInput[]
    createMany?: AdminCreateManyCommunityInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type ManagerCreateNestedOneWithoutCommunityInput = {
    create?: XOR<ManagerCreateWithoutCommunityInput, ManagerUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutCommunityInput
    connect?: ManagerWhereUniqueInput
  }

  export type Community_memberCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput> | Community_memberCreateWithoutCommunityInput[] | Community_memberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutCommunityInput | Community_memberCreateOrConnectWithoutCommunityInput[]
    createMany?: Community_memberCreateManyCommunityInputEnvelope
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
  }

  export type TournamentCreateNestedManyWithoutCommunityInput = {
    create?: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput> | TournamentCreateWithoutCommunityInput[] | TournamentUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutCommunityInput | TournamentCreateOrConnectWithoutCommunityInput[]
    createMany?: TournamentCreateManyCommunityInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput> | AdminCreateWithoutCommunityInput[] | AdminUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutCommunityInput | AdminCreateOrConnectWithoutCommunityInput[]
    createMany?: AdminCreateManyCommunityInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type Community_memberUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput> | Community_memberCreateWithoutCommunityInput[] | Community_memberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutCommunityInput | Community_memberCreateOrConnectWithoutCommunityInput[]
    createMany?: Community_memberCreateManyCommunityInputEnvelope
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput> | TournamentCreateWithoutCommunityInput[] | TournamentUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutCommunityInput | TournamentCreateOrConnectWithoutCommunityInput[]
    createMany?: TournamentCreateManyCommunityInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AdminUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput> | AdminCreateWithoutCommunityInput[] | AdminUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutCommunityInput | AdminCreateOrConnectWithoutCommunityInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutCommunityInput | AdminUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: AdminCreateManyCommunityInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutCommunityInput | AdminUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutCommunityInput | AdminUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type ManagerUpdateOneWithoutCommunityNestedInput = {
    create?: XOR<ManagerCreateWithoutCommunityInput, ManagerUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutCommunityInput
    upsert?: ManagerUpsertWithoutCommunityInput
    disconnect?: ManagerWhereInput | boolean
    delete?: ManagerWhereInput | boolean
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutCommunityInput, ManagerUpdateWithoutCommunityInput>, ManagerUncheckedUpdateWithoutCommunityInput>
  }

  export type Community_memberUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput> | Community_memberCreateWithoutCommunityInput[] | Community_memberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutCommunityInput | Community_memberCreateOrConnectWithoutCommunityInput[]
    upsert?: Community_memberUpsertWithWhereUniqueWithoutCommunityInput | Community_memberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: Community_memberCreateManyCommunityInputEnvelope
    set?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    disconnect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    delete?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    update?: Community_memberUpdateWithWhereUniqueWithoutCommunityInput | Community_memberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: Community_memberUpdateManyWithWhereWithoutCommunityInput | Community_memberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
  }

  export type TournamentUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput> | TournamentCreateWithoutCommunityInput[] | TournamentUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutCommunityInput | TournamentCreateOrConnectWithoutCommunityInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutCommunityInput | TournamentUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: TournamentCreateManyCommunityInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutCommunityInput | TournamentUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutCommunityInput | TournamentUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput> | AdminCreateWithoutCommunityInput[] | AdminUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutCommunityInput | AdminCreateOrConnectWithoutCommunityInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutCommunityInput | AdminUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: AdminCreateManyCommunityInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutCommunityInput | AdminUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutCommunityInput | AdminUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type Community_memberUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput> | Community_memberCreateWithoutCommunityInput[] | Community_memberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutCommunityInput | Community_memberCreateOrConnectWithoutCommunityInput[]
    upsert?: Community_memberUpsertWithWhereUniqueWithoutCommunityInput | Community_memberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: Community_memberCreateManyCommunityInputEnvelope
    set?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    disconnect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    delete?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    update?: Community_memberUpdateWithWhereUniqueWithoutCommunityInput | Community_memberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: Community_memberUpdateManyWithWhereWithoutCommunityInput | Community_memberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput> | TournamentCreateWithoutCommunityInput[] | TournamentUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutCommunityInput | TournamentCreateOrConnectWithoutCommunityInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutCommunityInput | TournamentUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: TournamentCreateManyCommunityInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutCommunityInput | TournamentUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutCommunityInput | TournamentUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutCommunity_memberInput = {
    create?: XOR<CommunityCreateWithoutCommunity_memberInput, CommunityUncheckedCreateWithoutCommunity_memberInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutCommunity_memberInput
    connect?: CommunityWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutCommunity_memberInput = {
    create?: XOR<MemberCreateWithoutCommunity_memberInput, MemberUncheckedCreateWithoutCommunity_memberInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCommunity_memberInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CommunityUpdateOneWithoutCommunity_memberNestedInput = {
    create?: XOR<CommunityCreateWithoutCommunity_memberInput, CommunityUncheckedCreateWithoutCommunity_memberInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutCommunity_memberInput
    upsert?: CommunityUpsertWithoutCommunity_memberInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutCommunity_memberInput, CommunityUpdateWithoutCommunity_memberInput>, CommunityUncheckedUpdateWithoutCommunity_memberInput>
  }

  export type MemberUpdateOneWithoutCommunity_memberNestedInput = {
    create?: XOR<MemberCreateWithoutCommunity_memberInput, MemberUncheckedCreateWithoutCommunity_memberInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCommunity_memberInput
    upsert?: MemberUpsertWithoutCommunity_memberInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCommunity_memberInput, MemberUpdateWithoutCommunity_memberInput>, MemberUncheckedUpdateWithoutCommunity_memberInput>
  }

  export type MemberCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<MemberCreateWithoutEmployeeInput, MemberUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEmployeeInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<MemberCreateWithoutEmployeeInput, MemberUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEmployeeInput
    upsert?: MemberUpsertWithoutEmployeeInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutEmployeeInput, MemberUpdateWithoutEmployeeInput>, MemberUncheckedUpdateWithoutEmployeeInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommunityCreateNestedManyWithoutManagerInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutManagerInput | CommunityUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutManagerInput | CommunityUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutManagerInput | CommunityUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutManagerInput | CommunityUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutManagerInput | CommunityUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutManagerInput | CommunityUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutMemberInput = {
    create?: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMemberInput
    connect?: AdminWhereUniqueInput
  }

  export type Community_memberCreateNestedManyWithoutMemberInput = {
    create?: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput> | Community_memberCreateWithoutMemberInput[] | Community_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutMemberInput | Community_memberCreateOrConnectWithoutMemberInput[]
    createMany?: Community_memberCreateManyMemberInputEnvelope
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutMemberInput = {
    create?: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMemberInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutMemberInput = {
    create?: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput> | PlayerCreateWithoutMemberInput[] | PlayerUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMemberInput | PlayerCreateOrConnectWithoutMemberInput[]
    createMany?: PlayerCreateManyMemberInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type SponsorCreateNestedOneWithoutMemberInput = {
    create?: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutMemberInput
    connect?: SponsorWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutMemberInput = {
    create?: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput> | TeamCreateWithoutMemberInput[] | TeamUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMemberInput | TeamCreateOrConnectWithoutMemberInput[]
    createMany?: TeamCreateManyMemberInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type Team_memberCreateNestedManyWithoutMemberInput = {
    create?: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput> | Team_memberCreateWithoutMemberInput[] | Team_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutMemberInput | Team_memberCreateOrConnectWithoutMemberInput[]
    createMany?: Team_memberCreateManyMemberInputEnvelope
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMemberInput
    connect?: AdminWhereUniqueInput
  }

  export type Community_memberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput> | Community_memberCreateWithoutMemberInput[] | Community_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutMemberInput | Community_memberCreateOrConnectWithoutMemberInput[]
    createMany?: Community_memberCreateManyMemberInputEnvelope
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMemberInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput> | PlayerCreateWithoutMemberInput[] | PlayerUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMemberInput | PlayerCreateOrConnectWithoutMemberInput[]
    createMany?: PlayerCreateManyMemberInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type SponsorUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutMemberInput
    connect?: SponsorWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput> | TeamCreateWithoutMemberInput[] | TeamUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMemberInput | TeamCreateOrConnectWithoutMemberInput[]
    createMany?: TeamCreateManyMemberInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type Team_memberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput> | Team_memberCreateWithoutMemberInput[] | Team_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutMemberInput | Team_memberCreateOrConnectWithoutMemberInput[]
    createMany?: Team_memberCreateManyMemberInputEnvelope
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
  }

  export type AdminUpdateOneWithoutMemberNestedInput = {
    create?: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMemberInput
    upsert?: AdminUpsertWithoutMemberInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMemberInput, AdminUpdateWithoutMemberInput>, AdminUncheckedUpdateWithoutMemberInput>
  }

  export type Community_memberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput> | Community_memberCreateWithoutMemberInput[] | Community_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutMemberInput | Community_memberCreateOrConnectWithoutMemberInput[]
    upsert?: Community_memberUpsertWithWhereUniqueWithoutMemberInput | Community_memberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: Community_memberCreateManyMemberInputEnvelope
    set?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    disconnect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    delete?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    update?: Community_memberUpdateWithWhereUniqueWithoutMemberInput | Community_memberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: Community_memberUpdateManyWithWhereWithoutMemberInput | Community_memberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutMemberNestedInput = {
    create?: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMemberInput
    upsert?: EmployeeUpsertWithoutMemberInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutMemberInput, EmployeeUpdateWithoutMemberInput>, EmployeeUncheckedUpdateWithoutMemberInput>
  }

  export type PlayerUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput> | PlayerCreateWithoutMemberInput[] | PlayerUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMemberInput | PlayerCreateOrConnectWithoutMemberInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutMemberInput | PlayerUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PlayerCreateManyMemberInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutMemberInput | PlayerUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutMemberInput | PlayerUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type SponsorUpdateOneWithoutMemberNestedInput = {
    create?: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutMemberInput
    upsert?: SponsorUpsertWithoutMemberInput
    disconnect?: SponsorWhereInput | boolean
    delete?: SponsorWhereInput | boolean
    connect?: SponsorWhereUniqueInput
    update?: XOR<XOR<SponsorUpdateToOneWithWhereWithoutMemberInput, SponsorUpdateWithoutMemberInput>, SponsorUncheckedUpdateWithoutMemberInput>
  }

  export type TeamUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput> | TeamCreateWithoutMemberInput[] | TeamUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMemberInput | TeamCreateOrConnectWithoutMemberInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMemberInput | TeamUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TeamCreateManyMemberInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMemberInput | TeamUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMemberInput | TeamUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type Team_memberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput> | Team_memberCreateWithoutMemberInput[] | Team_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutMemberInput | Team_memberCreateOrConnectWithoutMemberInput[]
    upsert?: Team_memberUpsertWithWhereUniqueWithoutMemberInput | Team_memberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: Team_memberCreateManyMemberInputEnvelope
    set?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    disconnect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    delete?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    update?: Team_memberUpdateWithWhereUniqueWithoutMemberInput | Team_memberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: Team_memberUpdateManyWithWhereWithoutMemberInput | Team_memberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
  }

  export type AdminUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMemberInput
    upsert?: AdminUpsertWithoutMemberInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMemberInput, AdminUpdateWithoutMemberInput>, AdminUncheckedUpdateWithoutMemberInput>
  }

  export type Community_memberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput> | Community_memberCreateWithoutMemberInput[] | Community_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Community_memberCreateOrConnectWithoutMemberInput | Community_memberCreateOrConnectWithoutMemberInput[]
    upsert?: Community_memberUpsertWithWhereUniqueWithoutMemberInput | Community_memberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: Community_memberCreateManyMemberInputEnvelope
    set?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    disconnect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    delete?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    connect?: Community_memberWhereUniqueInput | Community_memberWhereUniqueInput[]
    update?: Community_memberUpdateWithWhereUniqueWithoutMemberInput | Community_memberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: Community_memberUpdateManyWithWhereWithoutMemberInput | Community_memberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMemberInput
    upsert?: EmployeeUpsertWithoutMemberInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutMemberInput, EmployeeUpdateWithoutMemberInput>, EmployeeUncheckedUpdateWithoutMemberInput>
  }

  export type PlayerUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput> | PlayerCreateWithoutMemberInput[] | PlayerUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMemberInput | PlayerCreateOrConnectWithoutMemberInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutMemberInput | PlayerUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PlayerCreateManyMemberInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutMemberInput | PlayerUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutMemberInput | PlayerUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type SponsorUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutMemberInput
    upsert?: SponsorUpsertWithoutMemberInput
    disconnect?: SponsorWhereInput | boolean
    delete?: SponsorWhereInput | boolean
    connect?: SponsorWhereUniqueInput
    update?: XOR<XOR<SponsorUpdateToOneWithWhereWithoutMemberInput, SponsorUpdateWithoutMemberInput>, SponsorUncheckedUpdateWithoutMemberInput>
  }

  export type TeamUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput> | TeamCreateWithoutMemberInput[] | TeamUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMemberInput | TeamCreateOrConnectWithoutMemberInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMemberInput | TeamUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TeamCreateManyMemberInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMemberInput | TeamUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMemberInput | TeamUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type Team_memberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput> | Team_memberCreateWithoutMemberInput[] | Team_memberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutMemberInput | Team_memberCreateOrConnectWithoutMemberInput[]
    upsert?: Team_memberUpsertWithWhereUniqueWithoutMemberInput | Team_memberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: Team_memberCreateManyMemberInputEnvelope
    set?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    disconnect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    delete?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    update?: Team_memberUpdateWithWhereUniqueWithoutMemberInput | Team_memberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: Team_memberUpdateManyWithWhereWithoutMemberInput | Team_memberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutPlayerInput = {
    create?: XOR<MemberCreateWithoutPlayerInput, MemberUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPlayerInput
    connect?: MemberWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutPlayerInput = {
    create?: XOR<TournamentCreateWithoutPlayerInput, TournamentUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPlayerInput
    connect?: TournamentWhereUniqueInput
  }

  export type MemberUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<MemberCreateWithoutPlayerInput, MemberUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPlayerInput
    upsert?: MemberUpsertWithoutPlayerInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPlayerInput, MemberUpdateWithoutPlayerInput>, MemberUncheckedUpdateWithoutPlayerInput>
  }

  export type TournamentUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<TournamentCreateWithoutPlayerInput, TournamentUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPlayerInput
    upsert?: TournamentUpsertWithoutPlayerInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutPlayerInput, TournamentUpdateWithoutPlayerInput>, TournamentUncheckedUpdateWithoutPlayerInput>
  }

  export type TournamentCreateNestedOneWithoutPrizeInput = {
    create?: XOR<TournamentCreateWithoutPrizeInput, TournamentUncheckedCreateWithoutPrizeInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPrizeInput
    connect?: TournamentWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutPrizeInput = {
    create?: XOR<TypeCreateWithoutPrizeInput, TypeUncheckedCreateWithoutPrizeInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPrizeInput
    connect?: TypeWhereUniqueInput
  }

  export type Prize_sponsorCreateNestedManyWithoutPrizeInput = {
    create?: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput> | Prize_sponsorCreateWithoutPrizeInput[] | Prize_sponsorUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutPrizeInput | Prize_sponsorCreateOrConnectWithoutPrizeInput[]
    createMany?: Prize_sponsorCreateManyPrizeInputEnvelope
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
  }

  export type Prize_sponsorUncheckedCreateNestedManyWithoutPrizeInput = {
    create?: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput> | Prize_sponsorCreateWithoutPrizeInput[] | Prize_sponsorUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutPrizeInput | Prize_sponsorCreateOrConnectWithoutPrizeInput[]
    createMany?: Prize_sponsorCreateManyPrizeInputEnvelope
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
  }

  export type TournamentUpdateOneWithoutPrizeNestedInput = {
    create?: XOR<TournamentCreateWithoutPrizeInput, TournamentUncheckedCreateWithoutPrizeInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPrizeInput
    upsert?: TournamentUpsertWithoutPrizeInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutPrizeInput, TournamentUpdateWithoutPrizeInput>, TournamentUncheckedUpdateWithoutPrizeInput>
  }

  export type TypeUpdateOneWithoutPrizeNestedInput = {
    create?: XOR<TypeCreateWithoutPrizeInput, TypeUncheckedCreateWithoutPrizeInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPrizeInput
    upsert?: TypeUpsertWithoutPrizeInput
    disconnect?: TypeWhereInput | boolean
    delete?: TypeWhereInput | boolean
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutPrizeInput, TypeUpdateWithoutPrizeInput>, TypeUncheckedUpdateWithoutPrizeInput>
  }

  export type Prize_sponsorUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput> | Prize_sponsorCreateWithoutPrizeInput[] | Prize_sponsorUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutPrizeInput | Prize_sponsorCreateOrConnectWithoutPrizeInput[]
    upsert?: Prize_sponsorUpsertWithWhereUniqueWithoutPrizeInput | Prize_sponsorUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: Prize_sponsorCreateManyPrizeInputEnvelope
    set?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    disconnect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    delete?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    update?: Prize_sponsorUpdateWithWhereUniqueWithoutPrizeInput | Prize_sponsorUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: Prize_sponsorUpdateManyWithWhereWithoutPrizeInput | Prize_sponsorUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
  }

  export type Prize_sponsorUncheckedUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput> | Prize_sponsorCreateWithoutPrizeInput[] | Prize_sponsorUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutPrizeInput | Prize_sponsorCreateOrConnectWithoutPrizeInput[]
    upsert?: Prize_sponsorUpsertWithWhereUniqueWithoutPrizeInput | Prize_sponsorUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: Prize_sponsorCreateManyPrizeInputEnvelope
    set?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    disconnect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    delete?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    update?: Prize_sponsorUpdateWithWhereUniqueWithoutPrizeInput | Prize_sponsorUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: Prize_sponsorUpdateManyWithWhereWithoutPrizeInput | Prize_sponsorUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
  }

  export type PrizeCreateNestedOneWithoutPrize_sponsorInput = {
    create?: XOR<PrizeCreateWithoutPrize_sponsorInput, PrizeUncheckedCreateWithoutPrize_sponsorInput>
    connectOrCreate?: PrizeCreateOrConnectWithoutPrize_sponsorInput
    connect?: PrizeWhereUniqueInput
  }

  export type SponsorCreateNestedOneWithoutPrize_sponsorInput = {
    create?: XOR<SponsorCreateWithoutPrize_sponsorInput, SponsorUncheckedCreateWithoutPrize_sponsorInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutPrize_sponsorInput
    connect?: SponsorWhereUniqueInput
  }

  export type PrizeUpdateOneWithoutPrize_sponsorNestedInput = {
    create?: XOR<PrizeCreateWithoutPrize_sponsorInput, PrizeUncheckedCreateWithoutPrize_sponsorInput>
    connectOrCreate?: PrizeCreateOrConnectWithoutPrize_sponsorInput
    upsert?: PrizeUpsertWithoutPrize_sponsorInput
    disconnect?: PrizeWhereInput | boolean
    delete?: PrizeWhereInput | boolean
    connect?: PrizeWhereUniqueInput
    update?: XOR<XOR<PrizeUpdateToOneWithWhereWithoutPrize_sponsorInput, PrizeUpdateWithoutPrize_sponsorInput>, PrizeUncheckedUpdateWithoutPrize_sponsorInput>
  }

  export type SponsorUpdateOneWithoutPrize_sponsorNestedInput = {
    create?: XOR<SponsorCreateWithoutPrize_sponsorInput, SponsorUncheckedCreateWithoutPrize_sponsorInput>
    connectOrCreate?: SponsorCreateOrConnectWithoutPrize_sponsorInput
    upsert?: SponsorUpsertWithoutPrize_sponsorInput
    disconnect?: SponsorWhereInput | boolean
    delete?: SponsorWhereInput | boolean
    connect?: SponsorWhereUniqueInput
    update?: XOR<XOR<SponsorUpdateToOneWithWhereWithoutPrize_sponsorInput, SponsorUpdateWithoutPrize_sponsorInput>, SponsorUncheckedUpdateWithoutPrize_sponsorInput>
  }

  export type Prize_sponsorCreateNestedManyWithoutSponsorInput = {
    create?: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput> | Prize_sponsorCreateWithoutSponsorInput[] | Prize_sponsorUncheckedCreateWithoutSponsorInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutSponsorInput | Prize_sponsorCreateOrConnectWithoutSponsorInput[]
    createMany?: Prize_sponsorCreateManySponsorInputEnvelope
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
  }

  export type MemberCreateNestedOneWithoutSponsorInput = {
    create?: XOR<MemberCreateWithoutSponsorInput, MemberUncheckedCreateWithoutSponsorInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSponsorInput
    connect?: MemberWhereUniqueInput
  }

  export type Prize_sponsorUncheckedCreateNestedManyWithoutSponsorInput = {
    create?: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput> | Prize_sponsorCreateWithoutSponsorInput[] | Prize_sponsorUncheckedCreateWithoutSponsorInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutSponsorInput | Prize_sponsorCreateOrConnectWithoutSponsorInput[]
    createMany?: Prize_sponsorCreateManySponsorInputEnvelope
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
  }

  export type Prize_sponsorUpdateManyWithoutSponsorNestedInput = {
    create?: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput> | Prize_sponsorCreateWithoutSponsorInput[] | Prize_sponsorUncheckedCreateWithoutSponsorInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutSponsorInput | Prize_sponsorCreateOrConnectWithoutSponsorInput[]
    upsert?: Prize_sponsorUpsertWithWhereUniqueWithoutSponsorInput | Prize_sponsorUpsertWithWhereUniqueWithoutSponsorInput[]
    createMany?: Prize_sponsorCreateManySponsorInputEnvelope
    set?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    disconnect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    delete?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    update?: Prize_sponsorUpdateWithWhereUniqueWithoutSponsorInput | Prize_sponsorUpdateWithWhereUniqueWithoutSponsorInput[]
    updateMany?: Prize_sponsorUpdateManyWithWhereWithoutSponsorInput | Prize_sponsorUpdateManyWithWhereWithoutSponsorInput[]
    deleteMany?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
  }

  export type MemberUpdateOneRequiredWithoutSponsorNestedInput = {
    create?: XOR<MemberCreateWithoutSponsorInput, MemberUncheckedCreateWithoutSponsorInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSponsorInput
    upsert?: MemberUpsertWithoutSponsorInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSponsorInput, MemberUpdateWithoutSponsorInput>, MemberUncheckedUpdateWithoutSponsorInput>
  }

  export type Prize_sponsorUncheckedUpdateManyWithoutSponsorNestedInput = {
    create?: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput> | Prize_sponsorCreateWithoutSponsorInput[] | Prize_sponsorUncheckedCreateWithoutSponsorInput[]
    connectOrCreate?: Prize_sponsorCreateOrConnectWithoutSponsorInput | Prize_sponsorCreateOrConnectWithoutSponsorInput[]
    upsert?: Prize_sponsorUpsertWithWhereUniqueWithoutSponsorInput | Prize_sponsorUpsertWithWhereUniqueWithoutSponsorInput[]
    createMany?: Prize_sponsorCreateManySponsorInputEnvelope
    set?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    disconnect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    delete?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    connect?: Prize_sponsorWhereUniqueInput | Prize_sponsorWhereUniqueInput[]
    update?: Prize_sponsorUpdateWithWhereUniqueWithoutSponsorInput | Prize_sponsorUpdateWithWhereUniqueWithoutSponsorInput[]
    updateMany?: Prize_sponsorUpdateManyWithWhereWithoutSponsorInput | Prize_sponsorUpdateManyWithWhereWithoutSponsorInput[]
    deleteMany?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutTeamInput = {
    create?: XOR<TournamentCreateWithoutTeamInput, TournamentUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamInput
    connect?: TournamentWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutTeamInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput
    connect?: MemberWhereUniqueInput
  }

  export type Team_memberCreateNestedManyWithoutTeamInput = {
    create?: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput> | Team_memberCreateWithoutTeamInput[] | Team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutTeamInput | Team_memberCreateOrConnectWithoutTeamInput[]
    createMany?: Team_memberCreateManyTeamInputEnvelope
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
  }

  export type Team_memberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput> | Team_memberCreateWithoutTeamInput[] | Team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutTeamInput | Team_memberCreateOrConnectWithoutTeamInput[]
    createMany?: Team_memberCreateManyTeamInputEnvelope
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
  }

  export type TournamentUpdateOneWithoutTeamNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamInput, TournamentUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamInput
    upsert?: TournamentUpsertWithoutTeamInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTeamInput, TournamentUpdateWithoutTeamInput>, TournamentUncheckedUpdateWithoutTeamInput>
  }

  export type MemberUpdateOneWithoutTeamNestedInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput
    upsert?: MemberUpsertWithoutTeamInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutTeamInput, MemberUpdateWithoutTeamInput>, MemberUncheckedUpdateWithoutTeamInput>
  }

  export type Team_memberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput> | Team_memberCreateWithoutTeamInput[] | Team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutTeamInput | Team_memberCreateOrConnectWithoutTeamInput[]
    upsert?: Team_memberUpsertWithWhereUniqueWithoutTeamInput | Team_memberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: Team_memberCreateManyTeamInputEnvelope
    set?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    disconnect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    delete?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    update?: Team_memberUpdateWithWhereUniqueWithoutTeamInput | Team_memberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: Team_memberUpdateManyWithWhereWithoutTeamInput | Team_memberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
  }

  export type Team_memberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput> | Team_memberCreateWithoutTeamInput[] | Team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: Team_memberCreateOrConnectWithoutTeamInput | Team_memberCreateOrConnectWithoutTeamInput[]
    upsert?: Team_memberUpsertWithWhereUniqueWithoutTeamInput | Team_memberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: Team_memberCreateManyTeamInputEnvelope
    set?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    disconnect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    delete?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    connect?: Team_memberWhereUniqueInput | Team_memberWhereUniqueInput[]
    update?: Team_memberUpdateWithWhereUniqueWithoutTeamInput | Team_memberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: Team_memberUpdateManyWithWhereWithoutTeamInput | Team_memberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<TeamCreateWithoutTeam_memberInput, TeamUncheckedCreateWithoutTeam_memberInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeam_memberInput
    connect?: TeamWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<MemberCreateWithoutTeam_memberInput, MemberUncheckedCreateWithoutTeam_memberInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTeam_memberInput
    connect?: MemberWhereUniqueInput
  }

  export type TeamUpdateOneWithoutTeam_memberNestedInput = {
    create?: XOR<TeamCreateWithoutTeam_memberInput, TeamUncheckedCreateWithoutTeam_memberInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeam_memberInput
    upsert?: TeamUpsertWithoutTeam_memberInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeam_memberInput, TeamUpdateWithoutTeam_memberInput>, TeamUncheckedUpdateWithoutTeam_memberInput>
  }

  export type MemberUpdateOneWithoutTeam_memberNestedInput = {
    create?: XOR<MemberCreateWithoutTeam_memberInput, MemberUncheckedCreateWithoutTeam_memberInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTeam_memberInput
    upsert?: MemberUpsertWithoutTeam_memberInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutTeam_memberInput, MemberUpdateWithoutTeam_memberInput>, MemberUncheckedUpdateWithoutTeam_memberInput>
  }

  export type PlayerCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput> | PlayerCreateWithoutTournamentInput[] | PlayerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentInput | PlayerCreateOrConnectWithoutTournamentInput[]
    createMany?: PlayerCreateManyTournamentInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PrizeCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput> | PrizeCreateWithoutTournamentInput[] | PrizeUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTournamentInput | PrizeCreateOrConnectWithoutTournamentInput[]
    createMany?: PrizeCreateManyTournamentInputEnvelope
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput> | TeamCreateWithoutTournamentInput[] | TeamUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentInput | TeamCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamCreateManyTournamentInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AdminCreateNestedOneWithoutTournamentInput = {
    create?: XOR<AdminCreateWithoutTournamentInput, AdminUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTournamentInput
    connect?: AdminWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutTournamentInput = {
    create?: XOR<CommunityCreateWithoutTournamentInput, CommunityUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutTournamentInput
    connect?: CommunityWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput> | PlayerCreateWithoutTournamentInput[] | PlayerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentInput | PlayerCreateOrConnectWithoutTournamentInput[]
    createMany?: PlayerCreateManyTournamentInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PrizeUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput> | PrizeCreateWithoutTournamentInput[] | PrizeUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTournamentInput | PrizeCreateOrConnectWithoutTournamentInput[]
    createMany?: PrizeCreateManyTournamentInputEnvelope
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput> | TeamCreateWithoutTournamentInput[] | TeamUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentInput | TeamCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamCreateManyTournamentInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput> | PlayerCreateWithoutTournamentInput[] | PlayerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentInput | PlayerCreateOrConnectWithoutTournamentInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTournamentInput | PlayerUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PlayerCreateManyTournamentInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTournamentInput | PlayerUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTournamentInput | PlayerUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PrizeUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput> | PrizeCreateWithoutTournamentInput[] | PrizeUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTournamentInput | PrizeCreateOrConnectWithoutTournamentInput[]
    upsert?: PrizeUpsertWithWhereUniqueWithoutTournamentInput | PrizeUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PrizeCreateManyTournamentInputEnvelope
    set?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    disconnect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    delete?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    update?: PrizeUpdateWithWhereUniqueWithoutTournamentInput | PrizeUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PrizeUpdateManyWithWhereWithoutTournamentInput | PrizeUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput> | TeamCreateWithoutTournamentInput[] | TeamUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentInput | TeamCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentInput | TeamUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamCreateManyTournamentInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentInput | TeamUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentInput | TeamUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AdminUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<AdminCreateWithoutTournamentInput, AdminUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTournamentInput
    upsert?: AdminUpsertWithoutTournamentInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutTournamentInput, AdminUpdateWithoutTournamentInput>, AdminUncheckedUpdateWithoutTournamentInput>
  }

  export type CommunityUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<CommunityCreateWithoutTournamentInput, CommunityUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutTournamentInput
    upsert?: CommunityUpsertWithoutTournamentInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutTournamentInput, CommunityUpdateWithoutTournamentInput>, CommunityUncheckedUpdateWithoutTournamentInput>
  }

  export type PlayerUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput> | PlayerCreateWithoutTournamentInput[] | PlayerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentInput | PlayerCreateOrConnectWithoutTournamentInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTournamentInput | PlayerUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PlayerCreateManyTournamentInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTournamentInput | PlayerUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTournamentInput | PlayerUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PrizeUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput> | PrizeCreateWithoutTournamentInput[] | PrizeUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTournamentInput | PrizeCreateOrConnectWithoutTournamentInput[]
    upsert?: PrizeUpsertWithWhereUniqueWithoutTournamentInput | PrizeUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PrizeCreateManyTournamentInputEnvelope
    set?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    disconnect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    delete?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    update?: PrizeUpdateWithWhereUniqueWithoutTournamentInput | PrizeUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PrizeUpdateManyWithWhereWithoutTournamentInput | PrizeUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput> | TeamCreateWithoutTournamentInput[] | TeamUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentInput | TeamCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentInput | TeamUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamCreateManyTournamentInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentInput | TeamUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentInput | TeamUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PrizeCreateNestedManyWithoutTypeInput = {
    create?: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput> | PrizeCreateWithoutTypeInput[] | PrizeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTypeInput | PrizeCreateOrConnectWithoutTypeInput[]
    createMany?: PrizeCreateManyTypeInputEnvelope
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
  }

  export type PrizeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput> | PrizeCreateWithoutTypeInput[] | PrizeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTypeInput | PrizeCreateOrConnectWithoutTypeInput[]
    createMany?: PrizeCreateManyTypeInputEnvelope
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
  }

  export type PrizeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput> | PrizeCreateWithoutTypeInput[] | PrizeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTypeInput | PrizeCreateOrConnectWithoutTypeInput[]
    upsert?: PrizeUpsertWithWhereUniqueWithoutTypeInput | PrizeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PrizeCreateManyTypeInputEnvelope
    set?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    disconnect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    delete?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    update?: PrizeUpdateWithWhereUniqueWithoutTypeInput | PrizeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PrizeUpdateManyWithWhereWithoutTypeInput | PrizeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
  }

  export type PrizeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput> | PrizeCreateWithoutTypeInput[] | PrizeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PrizeCreateOrConnectWithoutTypeInput | PrizeCreateOrConnectWithoutTypeInput[]
    upsert?: PrizeUpsertWithWhereUniqueWithoutTypeInput | PrizeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PrizeCreateManyTypeInputEnvelope
    set?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    disconnect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    delete?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    connect?: PrizeWhereUniqueInput | PrizeWhereUniqueInput[]
    update?: PrizeUpdateWithWhereUniqueWithoutTypeInput | PrizeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PrizeUpdateManyWithWhereWithoutTypeInput | PrizeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CommunityCreateWithoutAdminInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Manager?: ManagerCreateNestedOneWithoutCommunityInput
    Community_member?: Community_memberCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutAdminInput = {
    id_community?: number
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    id_manager?: number | null
    privacy?: boolean | null
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutAdminInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
  }

  export type MemberCreateWithoutAdminInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAdminInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutAdminInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
  }

  export type TournamentCreateWithoutAdminInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Player?: PlayerCreateNestedManyWithoutTournamentInput
    Prize?: PrizeCreateNestedManyWithoutTournamentInput
    Team?: TeamCreateNestedManyWithoutTournamentInput
    Community?: CommunityCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutAdminInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_community?: number | null
    fees?: number | null
    Player?: PlayerUncheckedCreateNestedManyWithoutTournamentInput
    Prize?: PrizeUncheckedCreateNestedManyWithoutTournamentInput
    Team?: TeamUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutAdminInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput>
  }

  export type TournamentCreateManyAdminInputEnvelope = {
    data: TournamentCreateManyAdminInput | TournamentCreateManyAdminInput[]
  }

  export type CommunityUpsertWithoutAdminInput = {
    update: XOR<CommunityUpdateWithoutAdminInput, CommunityUncheckedUpdateWithoutAdminInput>
    create: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutAdminInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutAdminInput, CommunityUncheckedUpdateWithoutAdminInput>
  }

  export type CommunityUpdateWithoutAdminInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Manager?: ManagerUpdateOneWithoutCommunityNestedInput
    Community_member?: Community_memberUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutAdminInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    id_manager?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Community_member?: Community_memberUncheckedUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type MemberUpsertWithoutAdminInput = {
    update: XOR<MemberUpdateWithoutAdminInput, MemberUncheckedUpdateWithoutAdminInput>
    create: XOR<MemberCreateWithoutAdminInput, MemberUncheckedCreateWithoutAdminInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutAdminInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutAdminInput, MemberUncheckedUpdateWithoutAdminInput>
  }

  export type MemberUpdateWithoutAdminInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAdminInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TournamentUpsertWithWhereUniqueWithoutAdminInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutAdminInput, TournamentUncheckedUpdateWithoutAdminInput>
    create: XOR<TournamentCreateWithoutAdminInput, TournamentUncheckedCreateWithoutAdminInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutAdminInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutAdminInput, TournamentUncheckedUpdateWithoutAdminInput>
  }

  export type TournamentUpdateManyWithWhereWithoutAdminInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutAdminInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id_tour?: IntFilter<"Tournament"> | number
    location?: StringNullableFilter<"Tournament"> | string | null
    start_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    status?: IntNullableFilter<"Tournament"> | number | null
    avatar?: StringNullableFilter<"Tournament"> | string | null
    id_admin?: IntNullableFilter<"Tournament"> | number | null
    id_community?: IntNullableFilter<"Tournament"> | number | null
    fees?: FloatNullableFilter<"Tournament"> | number | null
  }

  export type AdminCreateWithoutCommunityInput = {
    Member?: MemberCreateNestedOneWithoutAdminInput
    Tournament?: TournamentCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutCommunityInput = {
    id_admin?: number
    user_name?: string | null
    Tournament?: TournamentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutCommunityInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput>
  }

  export type AdminCreateManyCommunityInputEnvelope = {
    data: AdminCreateManyCommunityInput | AdminCreateManyCommunityInput[]
  }

  export type ManagerCreateWithoutCommunityInput = {
    password?: string | null
  }

  export type ManagerUncheckedCreateWithoutCommunityInput = {
    id_manager?: number
    password?: string | null
  }

  export type ManagerCreateOrConnectWithoutCommunityInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutCommunityInput, ManagerUncheckedCreateWithoutCommunityInput>
  }

  export type Community_memberCreateWithoutCommunityInput = {
    join_date?: Date | string | null
    Member?: MemberCreateNestedOneWithoutCommunity_memberInput
  }

  export type Community_memberUncheckedCreateWithoutCommunityInput = {
    id_co_member?: number
    join_date?: Date | string | null
    user_name?: string | null
  }

  export type Community_memberCreateOrConnectWithoutCommunityInput = {
    where: Community_memberWhereUniqueInput
    create: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput>
  }

  export type Community_memberCreateManyCommunityInputEnvelope = {
    data: Community_memberCreateManyCommunityInput | Community_memberCreateManyCommunityInput[]
  }

  export type TournamentCreateWithoutCommunityInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Player?: PlayerCreateNestedManyWithoutTournamentInput
    Prize?: PrizeCreateNestedManyWithoutTournamentInput
    Team?: TeamCreateNestedManyWithoutTournamentInput
    Admin?: AdminCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutCommunityInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    fees?: number | null
    Player?: PlayerUncheckedCreateNestedManyWithoutTournamentInput
    Prize?: PrizeUncheckedCreateNestedManyWithoutTournamentInput
    Team?: TeamUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutCommunityInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput>
  }

  export type TournamentCreateManyCommunityInputEnvelope = {
    data: TournamentCreateManyCommunityInput | TournamentCreateManyCommunityInput[]
  }

  export type AdminUpsertWithWhereUniqueWithoutCommunityInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutCommunityInput, AdminUncheckedUpdateWithoutCommunityInput>
    create: XOR<AdminCreateWithoutCommunityInput, AdminUncheckedCreateWithoutCommunityInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutCommunityInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutCommunityInput, AdminUncheckedUpdateWithoutCommunityInput>
  }

  export type AdminUpdateManyWithWhereWithoutCommunityInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutCommunityInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id_admin?: IntFilter<"Admin"> | number
    id_community?: IntNullableFilter<"Admin"> | number | null
    user_name?: StringNullableFilter<"Admin"> | string | null
  }

  export type ManagerUpsertWithoutCommunityInput = {
    update: XOR<ManagerUpdateWithoutCommunityInput, ManagerUncheckedUpdateWithoutCommunityInput>
    create: XOR<ManagerCreateWithoutCommunityInput, ManagerUncheckedCreateWithoutCommunityInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutCommunityInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutCommunityInput, ManagerUncheckedUpdateWithoutCommunityInput>
  }

  export type ManagerUpdateWithoutCommunityInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManagerUncheckedUpdateWithoutCommunityInput = {
    id_manager?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Community_memberUpsertWithWhereUniqueWithoutCommunityInput = {
    where: Community_memberWhereUniqueInput
    update: XOR<Community_memberUpdateWithoutCommunityInput, Community_memberUncheckedUpdateWithoutCommunityInput>
    create: XOR<Community_memberCreateWithoutCommunityInput, Community_memberUncheckedCreateWithoutCommunityInput>
  }

  export type Community_memberUpdateWithWhereUniqueWithoutCommunityInput = {
    where: Community_memberWhereUniqueInput
    data: XOR<Community_memberUpdateWithoutCommunityInput, Community_memberUncheckedUpdateWithoutCommunityInput>
  }

  export type Community_memberUpdateManyWithWhereWithoutCommunityInput = {
    where: Community_memberScalarWhereInput
    data: XOR<Community_memberUpdateManyMutationInput, Community_memberUncheckedUpdateManyWithoutCommunityInput>
  }

  export type Community_memberScalarWhereInput = {
    AND?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
    OR?: Community_memberScalarWhereInput[]
    NOT?: Community_memberScalarWhereInput | Community_memberScalarWhereInput[]
    id_co_member?: IntFilter<"Community_member"> | number
    join_date?: DateTimeNullableFilter<"Community_member"> | Date | string | null
    id_community?: IntNullableFilter<"Community_member"> | number | null
    user_name?: StringNullableFilter<"Community_member"> | string | null
  }

  export type TournamentUpsertWithWhereUniqueWithoutCommunityInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutCommunityInput, TournamentUncheckedUpdateWithoutCommunityInput>
    create: XOR<TournamentCreateWithoutCommunityInput, TournamentUncheckedCreateWithoutCommunityInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutCommunityInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutCommunityInput, TournamentUncheckedUpdateWithoutCommunityInput>
  }

  export type TournamentUpdateManyWithWhereWithoutCommunityInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityCreateWithoutCommunity_memberInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Admin?: AdminCreateNestedManyWithoutCommunityInput
    Manager?: ManagerCreateNestedOneWithoutCommunityInput
    Tournament?: TournamentCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCommunity_memberInput = {
    id_community?: number
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    id_manager?: number | null
    privacy?: boolean | null
    Admin?: AdminUncheckedCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCommunity_memberInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCommunity_memberInput, CommunityUncheckedCreateWithoutCommunity_memberInput>
  }

  export type MemberCreateWithoutCommunity_memberInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCommunity_memberInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCommunity_memberInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCommunity_memberInput, MemberUncheckedCreateWithoutCommunity_memberInput>
  }

  export type CommunityUpsertWithoutCommunity_memberInput = {
    update: XOR<CommunityUpdateWithoutCommunity_memberInput, CommunityUncheckedUpdateWithoutCommunity_memberInput>
    create: XOR<CommunityCreateWithoutCommunity_memberInput, CommunityUncheckedCreateWithoutCommunity_memberInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutCommunity_memberInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutCommunity_memberInput, CommunityUncheckedUpdateWithoutCommunity_memberInput>
  }

  export type CommunityUpdateWithoutCommunity_memberInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateManyWithoutCommunityNestedInput
    Manager?: ManagerUpdateOneWithoutCommunityNestedInput
    Tournament?: TournamentUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCommunity_memberInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    id_manager?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type MemberUpsertWithoutCommunity_memberInput = {
    update: XOR<MemberUpdateWithoutCommunity_memberInput, MemberUncheckedUpdateWithoutCommunity_memberInput>
    create: XOR<MemberCreateWithoutCommunity_memberInput, MemberUncheckedCreateWithoutCommunity_memberInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCommunity_memberInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCommunity_memberInput, MemberUncheckedUpdateWithoutCommunity_memberInput>
  }

  export type MemberUpdateWithoutCommunity_memberInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCommunity_memberInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutEmployeeInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutEmployeeInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutEmployeeInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutEmployeeInput, MemberUncheckedCreateWithoutEmployeeInput>
  }

  export type MemberUpsertWithoutEmployeeInput = {
    update: XOR<MemberUpdateWithoutEmployeeInput, MemberUncheckedUpdateWithoutEmployeeInput>
    create: XOR<MemberCreateWithoutEmployeeInput, MemberUncheckedCreateWithoutEmployeeInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutEmployeeInput, MemberUncheckedUpdateWithoutEmployeeInput>
  }

  export type MemberUpdateWithoutEmployeeInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutEmployeeInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type CommunityCreateWithoutManagerInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Admin?: AdminCreateNestedManyWithoutCommunityInput
    Community_member?: Community_memberCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutManagerInput = {
    id_community?: number
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Admin?: AdminUncheckedCreateNestedManyWithoutCommunityInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutCommunityInput
    Tournament?: TournamentUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput>
  }

  export type CommunityCreateManyManagerInputEnvelope = {
    data: CommunityCreateManyManagerInput | CommunityCreateManyManagerInput[]
  }

  export type CommunityUpsertWithWhereUniqueWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutManagerInput, CommunityUncheckedUpdateWithoutManagerInput>
    create: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutManagerInput, CommunityUncheckedUpdateWithoutManagerInput>
  }

  export type CommunityUpdateManyWithWhereWithoutManagerInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutManagerInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id_community?: IntFilter<"Community"> | number
    name?: StringNullableFilter<"Community"> | string | null
    details?: StringNullableFilter<"Community"> | string | null
    avatar?: StringNullableFilter<"Community"> | string | null
    members?: IntNullableFilter<"Community"> | number | null
    location?: StringNullableFilter<"Community"> | string | null
    id_manager?: IntNullableFilter<"Community"> | number | null
    privacy?: BoolNullableFilter<"Community"> | boolean | null
  }

  export type AdminCreateWithoutMemberInput = {
    Community?: CommunityCreateNestedOneWithoutAdminInput
    Tournament?: TournamentCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMemberInput = {
    id_admin?: number
    id_community?: number | null
    Tournament?: TournamentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMemberInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
  }

  export type Community_memberCreateWithoutMemberInput = {
    join_date?: Date | string | null
    Community?: CommunityCreateNestedOneWithoutCommunity_memberInput
  }

  export type Community_memberUncheckedCreateWithoutMemberInput = {
    id_co_member?: number
    join_date?: Date | string | null
    id_community?: number | null
  }

  export type Community_memberCreateOrConnectWithoutMemberInput = {
    where: Community_memberWhereUniqueInput
    create: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput>
  }

  export type Community_memberCreateManyMemberInputEnvelope = {
    data: Community_memberCreateManyMemberInput | Community_memberCreateManyMemberInput[]
  }

  export type EmployeeCreateWithoutMemberInput = {
    retraite?: boolean | null
  }

  export type EmployeeUncheckedCreateWithoutMemberInput = {
    retraite?: boolean | null
  }

  export type EmployeeCreateOrConnectWithoutMemberInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
  }

  export type PlayerCreateWithoutMemberInput = {
    Tournament?: TournamentCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutMemberInput = {
    id_player?: number
    id_tour?: number | null
  }

  export type PlayerCreateOrConnectWithoutMemberInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput>
  }

  export type PlayerCreateManyMemberInputEnvelope = {
    data: PlayerCreateManyMemberInput | PlayerCreateManyMemberInput[]
  }

  export type SponsorCreateWithoutMemberInput = {
    company_name?: string | null
    title?: string | null
    Prize_sponsor?: Prize_sponsorCreateNestedManyWithoutSponsorInput
  }

  export type SponsorUncheckedCreateWithoutMemberInput = {
    company_name?: string | null
    title?: string | null
    Prize_sponsor?: Prize_sponsorUncheckedCreateNestedManyWithoutSponsorInput
  }

  export type SponsorCreateOrConnectWithoutMemberInput = {
    where: SponsorWhereUniqueInput
    create: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
  }

  export type TeamCreateWithoutMemberInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    Tournament?: TournamentCreateNestedOneWithoutTeamInput
    Team_member?: Team_memberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMemberInput = {
    id_team?: number
    name?: string | null
    members?: number | null
    players?: number | null
    id_tour?: number | null
    key_team?: string | null
    open?: boolean | null
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMemberInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput>
  }

  export type TeamCreateManyMemberInputEnvelope = {
    data: TeamCreateManyMemberInput | TeamCreateManyMemberInput[]
  }

  export type Team_memberCreateWithoutMemberInput = {
    status?: boolean | null
    Team?: TeamCreateNestedOneWithoutTeam_memberInput
  }

  export type Team_memberUncheckedCreateWithoutMemberInput = {
    id_team_member?: number
    id_team?: number | null
    status?: boolean | null
  }

  export type Team_memberCreateOrConnectWithoutMemberInput = {
    where: Team_memberWhereUniqueInput
    create: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput>
  }

  export type Team_memberCreateManyMemberInputEnvelope = {
    data: Team_memberCreateManyMemberInput | Team_memberCreateManyMemberInput[]
  }

  export type AdminUpsertWithoutMemberInput = {
    update: XOR<AdminUpdateWithoutMemberInput, AdminUncheckedUpdateWithoutMemberInput>
    create: XOR<AdminCreateWithoutMemberInput, AdminUncheckedCreateWithoutMemberInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMemberInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMemberInput, AdminUncheckedUpdateWithoutMemberInput>
  }

  export type AdminUpdateWithoutMemberInput = {
    Community?: CommunityUpdateOneWithoutAdminNestedInput
    Tournament?: TournamentUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMemberInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    Tournament?: TournamentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type Community_memberUpsertWithWhereUniqueWithoutMemberInput = {
    where: Community_memberWhereUniqueInput
    update: XOR<Community_memberUpdateWithoutMemberInput, Community_memberUncheckedUpdateWithoutMemberInput>
    create: XOR<Community_memberCreateWithoutMemberInput, Community_memberUncheckedCreateWithoutMemberInput>
  }

  export type Community_memberUpdateWithWhereUniqueWithoutMemberInput = {
    where: Community_memberWhereUniqueInput
    data: XOR<Community_memberUpdateWithoutMemberInput, Community_memberUncheckedUpdateWithoutMemberInput>
  }

  export type Community_memberUpdateManyWithWhereWithoutMemberInput = {
    where: Community_memberScalarWhereInput
    data: XOR<Community_memberUpdateManyMutationInput, Community_memberUncheckedUpdateManyWithoutMemberInput>
  }

  export type EmployeeUpsertWithoutMemberInput = {
    update: XOR<EmployeeUpdateWithoutMemberInput, EmployeeUncheckedUpdateWithoutMemberInput>
    create: XOR<EmployeeCreateWithoutMemberInput, EmployeeUncheckedCreateWithoutMemberInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutMemberInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutMemberInput, EmployeeUncheckedUpdateWithoutMemberInput>
  }

  export type EmployeeUpdateWithoutMemberInput = {
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EmployeeUncheckedUpdateWithoutMemberInput = {
    retraite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayerUpsertWithWhereUniqueWithoutMemberInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutMemberInput, PlayerUncheckedUpdateWithoutMemberInput>
    create: XOR<PlayerCreateWithoutMemberInput, PlayerUncheckedCreateWithoutMemberInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutMemberInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutMemberInput, PlayerUncheckedUpdateWithoutMemberInput>
  }

  export type PlayerUpdateManyWithWhereWithoutMemberInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutMemberInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id_player?: IntFilter<"Player"> | number
    id_tour?: IntNullableFilter<"Player"> | number | null
    user_name?: StringNullableFilter<"Player"> | string | null
  }

  export type SponsorUpsertWithoutMemberInput = {
    update: XOR<SponsorUpdateWithoutMemberInput, SponsorUncheckedUpdateWithoutMemberInput>
    create: XOR<SponsorCreateWithoutMemberInput, SponsorUncheckedCreateWithoutMemberInput>
    where?: SponsorWhereInput
  }

  export type SponsorUpdateToOneWithWhereWithoutMemberInput = {
    where?: SponsorWhereInput
    data: XOR<SponsorUpdateWithoutMemberInput, SponsorUncheckedUpdateWithoutMemberInput>
  }

  export type SponsorUpdateWithoutMemberInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    Prize_sponsor?: Prize_sponsorUpdateManyWithoutSponsorNestedInput
  }

  export type SponsorUncheckedUpdateWithoutMemberInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    Prize_sponsor?: Prize_sponsorUncheckedUpdateManyWithoutSponsorNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutMemberInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutMemberInput, TeamUncheckedUpdateWithoutMemberInput>
    create: XOR<TeamCreateWithoutMemberInput, TeamUncheckedCreateWithoutMemberInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutMemberInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutMemberInput, TeamUncheckedUpdateWithoutMemberInput>
  }

  export type TeamUpdateManyWithWhereWithoutMemberInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutMemberInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id_team?: IntFilter<"Team"> | number
    name?: StringNullableFilter<"Team"> | string | null
    members?: IntNullableFilter<"Team"> | number | null
    players?: IntNullableFilter<"Team"> | number | null
    id_tour?: IntNullableFilter<"Team"> | number | null
    key_team?: StringNullableFilter<"Team"> | string | null
    open?: BoolNullableFilter<"Team"> | boolean | null
    user_name?: StringNullableFilter<"Team"> | string | null
  }

  export type Team_memberUpsertWithWhereUniqueWithoutMemberInput = {
    where: Team_memberWhereUniqueInput
    update: XOR<Team_memberUpdateWithoutMemberInput, Team_memberUncheckedUpdateWithoutMemberInput>
    create: XOR<Team_memberCreateWithoutMemberInput, Team_memberUncheckedCreateWithoutMemberInput>
  }

  export type Team_memberUpdateWithWhereUniqueWithoutMemberInput = {
    where: Team_memberWhereUniqueInput
    data: XOR<Team_memberUpdateWithoutMemberInput, Team_memberUncheckedUpdateWithoutMemberInput>
  }

  export type Team_memberUpdateManyWithWhereWithoutMemberInput = {
    where: Team_memberScalarWhereInput
    data: XOR<Team_memberUpdateManyMutationInput, Team_memberUncheckedUpdateManyWithoutMemberInput>
  }

  export type Team_memberScalarWhereInput = {
    AND?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
    OR?: Team_memberScalarWhereInput[]
    NOT?: Team_memberScalarWhereInput | Team_memberScalarWhereInput[]
    id_team_member?: IntFilter<"Team_member"> | number
    id_team?: IntNullableFilter<"Team_member"> | number | null
    user_name?: StringNullableFilter<"Team_member"> | string | null
    status?: BoolNullableFilter<"Team_member"> | boolean | null
  }

  export type MemberCreateWithoutPlayerInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPlayerInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPlayerInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPlayerInput, MemberUncheckedCreateWithoutPlayerInput>
  }

  export type TournamentCreateWithoutPlayerInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Prize?: PrizeCreateNestedManyWithoutTournamentInput
    Team?: TeamCreateNestedManyWithoutTournamentInput
    Admin?: AdminCreateNestedOneWithoutTournamentInput
    Community?: CommunityCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutPlayerInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    id_community?: number | null
    fees?: number | null
    Prize?: PrizeUncheckedCreateNestedManyWithoutTournamentInput
    Team?: TeamUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutPlayerInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutPlayerInput, TournamentUncheckedCreateWithoutPlayerInput>
  }

  export type MemberUpsertWithoutPlayerInput = {
    update: XOR<MemberUpdateWithoutPlayerInput, MemberUncheckedUpdateWithoutPlayerInput>
    create: XOR<MemberCreateWithoutPlayerInput, MemberUncheckedCreateWithoutPlayerInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPlayerInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPlayerInput, MemberUncheckedUpdateWithoutPlayerInput>
  }

  export type MemberUpdateWithoutPlayerInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPlayerInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TournamentUpsertWithoutPlayerInput = {
    update: XOR<TournamentUpdateWithoutPlayerInput, TournamentUncheckedUpdateWithoutPlayerInput>
    create: XOR<TournamentCreateWithoutPlayerInput, TournamentUncheckedCreateWithoutPlayerInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutPlayerInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutPlayerInput, TournamentUncheckedUpdateWithoutPlayerInput>
  }

  export type TournamentUpdateWithoutPlayerInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Prize?: PrizeUpdateManyWithoutTournamentNestedInput
    Team?: TeamUpdateManyWithoutTournamentNestedInput
    Admin?: AdminUpdateOneWithoutTournamentNestedInput
    Community?: CommunityUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutPlayerInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Prize?: PrizeUncheckedUpdateManyWithoutTournamentNestedInput
    Team?: TeamUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateWithoutPrizeInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Player?: PlayerCreateNestedManyWithoutTournamentInput
    Team?: TeamCreateNestedManyWithoutTournamentInput
    Admin?: AdminCreateNestedOneWithoutTournamentInput
    Community?: CommunityCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutPrizeInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    id_community?: number | null
    fees?: number | null
    Player?: PlayerUncheckedCreateNestedManyWithoutTournamentInput
    Team?: TeamUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutPrizeInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutPrizeInput, TournamentUncheckedCreateWithoutPrizeInput>
  }

  export type TypeCreateWithoutPrizeInput = {
    name?: string | null
  }

  export type TypeUncheckedCreateWithoutPrizeInput = {
    id_type?: number
    name?: string | null
  }

  export type TypeCreateOrConnectWithoutPrizeInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutPrizeInput, TypeUncheckedCreateWithoutPrizeInput>
  }

  export type Prize_sponsorCreateWithoutPrizeInput = {
    Sponsor?: SponsorCreateNestedOneWithoutPrize_sponsorInput
  }

  export type Prize_sponsorUncheckedCreateWithoutPrizeInput = {
    id_prize_sponsor?: number
    user_name?: string | null
  }

  export type Prize_sponsorCreateOrConnectWithoutPrizeInput = {
    where: Prize_sponsorWhereUniqueInput
    create: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput>
  }

  export type Prize_sponsorCreateManyPrizeInputEnvelope = {
    data: Prize_sponsorCreateManyPrizeInput | Prize_sponsorCreateManyPrizeInput[]
  }

  export type TournamentUpsertWithoutPrizeInput = {
    update: XOR<TournamentUpdateWithoutPrizeInput, TournamentUncheckedUpdateWithoutPrizeInput>
    create: XOR<TournamentCreateWithoutPrizeInput, TournamentUncheckedCreateWithoutPrizeInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutPrizeInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutPrizeInput, TournamentUncheckedUpdateWithoutPrizeInput>
  }

  export type TournamentUpdateWithoutPrizeInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUpdateManyWithoutTournamentNestedInput
    Team?: TeamUpdateManyWithoutTournamentNestedInput
    Admin?: AdminUpdateOneWithoutTournamentNestedInput
    Community?: CommunityUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutPrizeInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUncheckedUpdateManyWithoutTournamentNestedInput
    Team?: TeamUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TypeUpsertWithoutPrizeInput = {
    update: XOR<TypeUpdateWithoutPrizeInput, TypeUncheckedUpdateWithoutPrizeInput>
    create: XOR<TypeCreateWithoutPrizeInput, TypeUncheckedCreateWithoutPrizeInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutPrizeInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutPrizeInput, TypeUncheckedUpdateWithoutPrizeInput>
  }

  export type TypeUpdateWithoutPrizeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TypeUncheckedUpdateWithoutPrizeInput = {
    id_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prize_sponsorUpsertWithWhereUniqueWithoutPrizeInput = {
    where: Prize_sponsorWhereUniqueInput
    update: XOR<Prize_sponsorUpdateWithoutPrizeInput, Prize_sponsorUncheckedUpdateWithoutPrizeInput>
    create: XOR<Prize_sponsorCreateWithoutPrizeInput, Prize_sponsorUncheckedCreateWithoutPrizeInput>
  }

  export type Prize_sponsorUpdateWithWhereUniqueWithoutPrizeInput = {
    where: Prize_sponsorWhereUniqueInput
    data: XOR<Prize_sponsorUpdateWithoutPrizeInput, Prize_sponsorUncheckedUpdateWithoutPrizeInput>
  }

  export type Prize_sponsorUpdateManyWithWhereWithoutPrizeInput = {
    where: Prize_sponsorScalarWhereInput
    data: XOR<Prize_sponsorUpdateManyMutationInput, Prize_sponsorUncheckedUpdateManyWithoutPrizeInput>
  }

  export type Prize_sponsorScalarWhereInput = {
    AND?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
    OR?: Prize_sponsorScalarWhereInput[]
    NOT?: Prize_sponsorScalarWhereInput | Prize_sponsorScalarWhereInput[]
    id_prize_sponsor?: IntFilter<"Prize_sponsor"> | number
    id_prize?: IntNullableFilter<"Prize_sponsor"> | number | null
    user_name?: StringNullableFilter<"Prize_sponsor"> | string | null
  }

  export type PrizeCreateWithoutPrize_sponsorInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_admin?: number | null
    Tournament?: TournamentCreateNestedOneWithoutPrizeInput
    Type?: TypeCreateNestedOneWithoutPrizeInput
  }

  export type PrizeUncheckedCreateWithoutPrize_sponsorInput = {
    id_prize?: number
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_tour?: number | null
    id_type?: number | null
    id_admin?: number | null
  }

  export type PrizeCreateOrConnectWithoutPrize_sponsorInput = {
    where: PrizeWhereUniqueInput
    create: XOR<PrizeCreateWithoutPrize_sponsorInput, PrizeUncheckedCreateWithoutPrize_sponsorInput>
  }

  export type SponsorCreateWithoutPrize_sponsorInput = {
    company_name?: string | null
    title?: string | null
    Member: MemberCreateNestedOneWithoutSponsorInput
  }

  export type SponsorUncheckedCreateWithoutPrize_sponsorInput = {
    user_name: string
    company_name?: string | null
    title?: string | null
  }

  export type SponsorCreateOrConnectWithoutPrize_sponsorInput = {
    where: SponsorWhereUniqueInput
    create: XOR<SponsorCreateWithoutPrize_sponsorInput, SponsorUncheckedCreateWithoutPrize_sponsorInput>
  }

  export type PrizeUpsertWithoutPrize_sponsorInput = {
    update: XOR<PrizeUpdateWithoutPrize_sponsorInput, PrizeUncheckedUpdateWithoutPrize_sponsorInput>
    create: XOR<PrizeCreateWithoutPrize_sponsorInput, PrizeUncheckedCreateWithoutPrize_sponsorInput>
    where?: PrizeWhereInput
  }

  export type PrizeUpdateToOneWithWhereWithoutPrize_sponsorInput = {
    where?: PrizeWhereInput
    data: XOR<PrizeUpdateWithoutPrize_sponsorInput, PrizeUncheckedUpdateWithoutPrize_sponsorInput>
  }

  export type PrizeUpdateWithoutPrize_sponsorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Tournament?: TournamentUpdateOneWithoutPrizeNestedInput
    Type?: TypeUpdateOneWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateWithoutPrize_sponsorInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    id_type?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SponsorUpsertWithoutPrize_sponsorInput = {
    update: XOR<SponsorUpdateWithoutPrize_sponsorInput, SponsorUncheckedUpdateWithoutPrize_sponsorInput>
    create: XOR<SponsorCreateWithoutPrize_sponsorInput, SponsorUncheckedCreateWithoutPrize_sponsorInput>
    where?: SponsorWhereInput
  }

  export type SponsorUpdateToOneWithWhereWithoutPrize_sponsorInput = {
    where?: SponsorWhereInput
    data: XOR<SponsorUpdateWithoutPrize_sponsorInput, SponsorUncheckedUpdateWithoutPrize_sponsorInput>
  }

  export type SponsorUpdateWithoutPrize_sponsorInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    Member?: MemberUpdateOneRequiredWithoutSponsorNestedInput
  }

  export type SponsorUncheckedUpdateWithoutPrize_sponsorInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prize_sponsorCreateWithoutSponsorInput = {
    Prize?: PrizeCreateNestedOneWithoutPrize_sponsorInput
  }

  export type Prize_sponsorUncheckedCreateWithoutSponsorInput = {
    id_prize_sponsor?: number
    id_prize?: number | null
  }

  export type Prize_sponsorCreateOrConnectWithoutSponsorInput = {
    where: Prize_sponsorWhereUniqueInput
    create: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput>
  }

  export type Prize_sponsorCreateManySponsorInputEnvelope = {
    data: Prize_sponsorCreateManySponsorInput | Prize_sponsorCreateManySponsorInput[]
  }

  export type MemberCreateWithoutSponsorInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutSponsorInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutSponsorInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSponsorInput, MemberUncheckedCreateWithoutSponsorInput>
  }

  export type Prize_sponsorUpsertWithWhereUniqueWithoutSponsorInput = {
    where: Prize_sponsorWhereUniqueInput
    update: XOR<Prize_sponsorUpdateWithoutSponsorInput, Prize_sponsorUncheckedUpdateWithoutSponsorInput>
    create: XOR<Prize_sponsorCreateWithoutSponsorInput, Prize_sponsorUncheckedCreateWithoutSponsorInput>
  }

  export type Prize_sponsorUpdateWithWhereUniqueWithoutSponsorInput = {
    where: Prize_sponsorWhereUniqueInput
    data: XOR<Prize_sponsorUpdateWithoutSponsorInput, Prize_sponsorUncheckedUpdateWithoutSponsorInput>
  }

  export type Prize_sponsorUpdateManyWithWhereWithoutSponsorInput = {
    where: Prize_sponsorScalarWhereInput
    data: XOR<Prize_sponsorUpdateManyMutationInput, Prize_sponsorUncheckedUpdateManyWithoutSponsorInput>
  }

  export type MemberUpsertWithoutSponsorInput = {
    update: XOR<MemberUpdateWithoutSponsorInput, MemberUncheckedUpdateWithoutSponsorInput>
    create: XOR<MemberCreateWithoutSponsorInput, MemberUncheckedCreateWithoutSponsorInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSponsorInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSponsorInput, MemberUncheckedUpdateWithoutSponsorInput>
  }

  export type MemberUpdateWithoutSponsorInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutSponsorInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TournamentCreateWithoutTeamInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    fees?: number | null
    Player?: PlayerCreateNestedManyWithoutTournamentInput
    Prize?: PrizeCreateNestedManyWithoutTournamentInput
    Admin?: AdminCreateNestedOneWithoutTournamentInput
    Community?: CommunityCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamInput = {
    id_tour?: number
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    id_community?: number | null
    fees?: number | null
    Player?: PlayerUncheckedCreateNestedManyWithoutTournamentInput
    Prize?: PrizeUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTeamInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamInput, TournamentUncheckedCreateWithoutTeamInput>
  }

  export type MemberCreateWithoutTeamInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team_member?: Team_memberCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTeamInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutTeamInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
  }

  export type Team_memberCreateWithoutTeamInput = {
    status?: boolean | null
    Member?: MemberCreateNestedOneWithoutTeam_memberInput
  }

  export type Team_memberUncheckedCreateWithoutTeamInput = {
    id_team_member?: number
    user_name?: string | null
    status?: boolean | null
  }

  export type Team_memberCreateOrConnectWithoutTeamInput = {
    where: Team_memberWhereUniqueInput
    create: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput>
  }

  export type Team_memberCreateManyTeamInputEnvelope = {
    data: Team_memberCreateManyTeamInput | Team_memberCreateManyTeamInput[]
  }

  export type TournamentUpsertWithoutTeamInput = {
    update: XOR<TournamentUpdateWithoutTeamInput, TournamentUncheckedUpdateWithoutTeamInput>
    create: XOR<TournamentCreateWithoutTeamInput, TournamentUncheckedCreateWithoutTeamInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTeamInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTeamInput, TournamentUncheckedUpdateWithoutTeamInput>
  }

  export type TournamentUpdateWithoutTeamInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUpdateManyWithoutTournamentNestedInput
    Admin?: AdminUpdateOneWithoutTournamentNestedInput
    Community?: CommunityUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUncheckedUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type MemberUpsertWithoutTeamInput = {
    update: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutTeamInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
  }

  export type MemberUpdateWithoutTeamInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team_member?: Team_memberUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTeamInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team_member?: Team_memberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type Team_memberUpsertWithWhereUniqueWithoutTeamInput = {
    where: Team_memberWhereUniqueInput
    update: XOR<Team_memberUpdateWithoutTeamInput, Team_memberUncheckedUpdateWithoutTeamInput>
    create: XOR<Team_memberCreateWithoutTeamInput, Team_memberUncheckedCreateWithoutTeamInput>
  }

  export type Team_memberUpdateWithWhereUniqueWithoutTeamInput = {
    where: Team_memberWhereUniqueInput
    data: XOR<Team_memberUpdateWithoutTeamInput, Team_memberUncheckedUpdateWithoutTeamInput>
  }

  export type Team_memberUpdateManyWithWhereWithoutTeamInput = {
    where: Team_memberScalarWhereInput
    data: XOR<Team_memberUpdateManyMutationInput, Team_memberUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamCreateWithoutTeam_memberInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    Tournament?: TournamentCreateNestedOneWithoutTeamInput
    Member?: MemberCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeam_memberInput = {
    id_team?: number
    name?: string | null
    members?: number | null
    players?: number | null
    id_tour?: number | null
    key_team?: string | null
    open?: boolean | null
    user_name?: string | null
  }

  export type TeamCreateOrConnectWithoutTeam_memberInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeam_memberInput, TeamUncheckedCreateWithoutTeam_memberInput>
  }

  export type MemberCreateWithoutTeam_memberInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberCreateNestedManyWithoutMemberInput
    Employee?: EmployeeCreateNestedOneWithoutMemberInput
    Player?: PlayerCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorCreateNestedOneWithoutMemberInput
    Team?: TeamCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTeam_memberInput = {
    user_name: string
    name?: string | null
    surname?: string | null
    address?: string | null
    birth_date?: Date | string | null
    country?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    password?: string | null
    Admin?: AdminUncheckedCreateNestedOneWithoutMemberInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutMemberInput
    Employee?: EmployeeUncheckedCreateNestedOneWithoutMemberInput
    Player?: PlayerUncheckedCreateNestedManyWithoutMemberInput
    Sponsor?: SponsorUncheckedCreateNestedOneWithoutMemberInput
    Team?: TeamUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutTeam_memberInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTeam_memberInput, MemberUncheckedCreateWithoutTeam_memberInput>
  }

  export type TeamUpsertWithoutTeam_memberInput = {
    update: XOR<TeamUpdateWithoutTeam_memberInput, TeamUncheckedUpdateWithoutTeam_memberInput>
    create: XOR<TeamCreateWithoutTeam_memberInput, TeamUncheckedCreateWithoutTeam_memberInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeam_memberInput, TeamUncheckedUpdateWithoutTeam_memberInput>
  }

  export type TeamUpdateWithoutTeam_memberInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tournament?: TournamentUpdateOneWithoutTeamNestedInput
    Member?: MemberUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeam_memberInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUpsertWithoutTeam_memberInput = {
    update: XOR<MemberUpdateWithoutTeam_memberInput, MemberUncheckedUpdateWithoutTeam_memberInput>
    create: XOR<MemberCreateWithoutTeam_memberInput, MemberUncheckedCreateWithoutTeam_memberInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutTeam_memberInput, MemberUncheckedUpdateWithoutTeam_memberInput>
  }

  export type MemberUpdateWithoutTeam_memberInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUpdateOneWithoutMemberNestedInput
    Player?: PlayerUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUpdateOneWithoutMemberNestedInput
    Team?: TeamUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTeam_memberInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Admin?: AdminUncheckedUpdateOneWithoutMemberNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutMemberNestedInput
    Employee?: EmployeeUncheckedUpdateOneWithoutMemberNestedInput
    Player?: PlayerUncheckedUpdateManyWithoutMemberNestedInput
    Sponsor?: SponsorUncheckedUpdateOneWithoutMemberNestedInput
    Team?: TeamUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PlayerCreateWithoutTournamentInput = {
    Member?: MemberCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTournamentInput = {
    id_player?: number
    user_name?: string | null
  }

  export type PlayerCreateOrConnectWithoutTournamentInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput>
  }

  export type PlayerCreateManyTournamentInputEnvelope = {
    data: PlayerCreateManyTournamentInput | PlayerCreateManyTournamentInput[]
  }

  export type PrizeCreateWithoutTournamentInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_admin?: number | null
    Type?: TypeCreateNestedOneWithoutPrizeInput
    Prize_sponsor?: Prize_sponsorCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUncheckedCreateWithoutTournamentInput = {
    id_prize?: number
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_type?: number | null
    id_admin?: number | null
    Prize_sponsor?: Prize_sponsorUncheckedCreateNestedManyWithoutPrizeInput
  }

  export type PrizeCreateOrConnectWithoutTournamentInput = {
    where: PrizeWhereUniqueInput
    create: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput>
  }

  export type PrizeCreateManyTournamentInputEnvelope = {
    data: PrizeCreateManyTournamentInput | PrizeCreateManyTournamentInput[]
  }

  export type TeamCreateWithoutTournamentInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    Member?: MemberCreateNestedOneWithoutTeamInput
    Team_member?: Team_memberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTournamentInput = {
    id_team?: number
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    user_name?: string | null
    Team_member?: Team_memberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTournamentInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput>
  }

  export type TeamCreateManyTournamentInputEnvelope = {
    data: TeamCreateManyTournamentInput | TeamCreateManyTournamentInput[]
  }

  export type AdminCreateWithoutTournamentInput = {
    Community?: CommunityCreateNestedOneWithoutAdminInput
    Member?: MemberCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutTournamentInput = {
    id_admin?: number
    id_community?: number | null
    user_name?: string | null
  }

  export type AdminCreateOrConnectWithoutTournamentInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTournamentInput, AdminUncheckedCreateWithoutTournamentInput>
  }

  export type CommunityCreateWithoutTournamentInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
    Admin?: AdminCreateNestedManyWithoutCommunityInput
    Manager?: ManagerCreateNestedOneWithoutCommunityInput
    Community_member?: Community_memberCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutTournamentInput = {
    id_community?: number
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    id_manager?: number | null
    privacy?: boolean | null
    Admin?: AdminUncheckedCreateNestedManyWithoutCommunityInput
    Community_member?: Community_memberUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutTournamentInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutTournamentInput, CommunityUncheckedCreateWithoutTournamentInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutTournamentInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTournamentInput, PlayerUncheckedUpdateWithoutTournamentInput>
    create: XOR<PlayerCreateWithoutTournamentInput, PlayerUncheckedCreateWithoutTournamentInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTournamentInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTournamentInput, PlayerUncheckedUpdateWithoutTournamentInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTournamentInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTournamentInput>
  }

  export type PrizeUpsertWithWhereUniqueWithoutTournamentInput = {
    where: PrizeWhereUniqueInput
    update: XOR<PrizeUpdateWithoutTournamentInput, PrizeUncheckedUpdateWithoutTournamentInput>
    create: XOR<PrizeCreateWithoutTournamentInput, PrizeUncheckedCreateWithoutTournamentInput>
  }

  export type PrizeUpdateWithWhereUniqueWithoutTournamentInput = {
    where: PrizeWhereUniqueInput
    data: XOR<PrizeUpdateWithoutTournamentInput, PrizeUncheckedUpdateWithoutTournamentInput>
  }

  export type PrizeUpdateManyWithWhereWithoutTournamentInput = {
    where: PrizeScalarWhereInput
    data: XOR<PrizeUpdateManyMutationInput, PrizeUncheckedUpdateManyWithoutTournamentInput>
  }

  export type PrizeScalarWhereInput = {
    AND?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
    OR?: PrizeScalarWhereInput[]
    NOT?: PrizeScalarWhereInput | PrizeScalarWhereInput[]
    id_prize?: IntFilter<"Prize"> | number
    name?: StringNullableFilter<"Prize"> | string | null
    spots?: IntNullableFilter<"Prize"> | number | null
    group_spot?: IntNullableFilter<"Prize"> | number | null
    id_tour?: IntNullableFilter<"Prize"> | number | null
    id_type?: IntNullableFilter<"Prize"> | number | null
    id_admin?: IntNullableFilter<"Prize"> | number | null
  }

  export type TeamUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutTournamentInput, TeamUncheckedUpdateWithoutTournamentInput>
    create: XOR<TeamCreateWithoutTournamentInput, TeamUncheckedCreateWithoutTournamentInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutTournamentInput, TeamUncheckedUpdateWithoutTournamentInput>
  }

  export type TeamUpdateManyWithWhereWithoutTournamentInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTournamentInput>
  }

  export type AdminUpsertWithoutTournamentInput = {
    update: XOR<AdminUpdateWithoutTournamentInput, AdminUncheckedUpdateWithoutTournamentInput>
    create: XOR<AdminCreateWithoutTournamentInput, AdminUncheckedCreateWithoutTournamentInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutTournamentInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutTournamentInput, AdminUncheckedUpdateWithoutTournamentInput>
  }

  export type AdminUpdateWithoutTournamentInput = {
    Community?: CommunityUpdateOneWithoutAdminNestedInput
    Member?: MemberUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutTournamentInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunityUpsertWithoutTournamentInput = {
    update: XOR<CommunityUpdateWithoutTournamentInput, CommunityUncheckedUpdateWithoutTournamentInput>
    create: XOR<CommunityCreateWithoutTournamentInput, CommunityUncheckedCreateWithoutTournamentInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutTournamentInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutTournamentInput, CommunityUncheckedUpdateWithoutTournamentInput>
  }

  export type CommunityUpdateWithoutTournamentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateManyWithoutCommunityNestedInput
    Manager?: ManagerUpdateOneWithoutCommunityNestedInput
    Community_member?: Community_memberUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutTournamentInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    id_manager?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateManyWithoutCommunityNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type PrizeCreateWithoutTypeInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_admin?: number | null
    Tournament?: TournamentCreateNestedOneWithoutPrizeInput
    Prize_sponsor?: Prize_sponsorCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUncheckedCreateWithoutTypeInput = {
    id_prize?: number
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_tour?: number | null
    id_admin?: number | null
    Prize_sponsor?: Prize_sponsorUncheckedCreateNestedManyWithoutPrizeInput
  }

  export type PrizeCreateOrConnectWithoutTypeInput = {
    where: PrizeWhereUniqueInput
    create: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput>
  }

  export type PrizeCreateManyTypeInputEnvelope = {
    data: PrizeCreateManyTypeInput | PrizeCreateManyTypeInput[]
  }

  export type PrizeUpsertWithWhereUniqueWithoutTypeInput = {
    where: PrizeWhereUniqueInput
    update: XOR<PrizeUpdateWithoutTypeInput, PrizeUncheckedUpdateWithoutTypeInput>
    create: XOR<PrizeCreateWithoutTypeInput, PrizeUncheckedCreateWithoutTypeInput>
  }

  export type PrizeUpdateWithWhereUniqueWithoutTypeInput = {
    where: PrizeWhereUniqueInput
    data: XOR<PrizeUpdateWithoutTypeInput, PrizeUncheckedUpdateWithoutTypeInput>
  }

  export type PrizeUpdateManyWithWhereWithoutTypeInput = {
    where: PrizeScalarWhereInput
    data: XOR<PrizeUpdateManyMutationInput, PrizeUncheckedUpdateManyWithoutTypeInput>
  }

  export type TournamentCreateManyAdminInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_community?: number | null
    fees?: number | null
  }

  export type TournamentUpdateWithoutAdminInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUpdateManyWithoutTournamentNestedInput
    Team?: TeamUpdateManyWithoutTournamentNestedInput
    Community?: CommunityUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutAdminInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUncheckedUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUncheckedUpdateManyWithoutTournamentNestedInput
    Team?: TeamUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutAdminInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AdminCreateManyCommunityInput = {
    user_name?: string | null
  }

  export type Community_memberCreateManyCommunityInput = {
    join_date?: Date | string | null
    user_name?: string | null
  }

  export type TournamentCreateManyCommunityInput = {
    location?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: number | null
    avatar?: string | null
    id_admin?: number | null
    fees?: number | null
  }

  export type AdminUpdateWithoutCommunityInput = {
    Member?: MemberUpdateOneWithoutAdminNestedInput
    Tournament?: TournamentUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutCommunityInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    Tournament?: TournamentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateManyWithoutCommunityInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Community_memberUpdateWithoutCommunityInput = {
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Member?: MemberUpdateOneWithoutCommunity_memberNestedInput
  }

  export type Community_memberUncheckedUpdateWithoutCommunityInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Community_memberUncheckedUpdateManyWithoutCommunityInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TournamentUpdateWithoutCommunityInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUpdateManyWithoutTournamentNestedInput
    Team?: TeamUpdateManyWithoutTournamentNestedInput
    Admin?: AdminUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutCommunityInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    Player?: PlayerUncheckedUpdateManyWithoutTournamentNestedInput
    Prize?: PrizeUncheckedUpdateManyWithoutTournamentNestedInput
    Team?: TeamUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutCommunityInput = {
    id_tour?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CommunityCreateManyManagerInput = {
    name?: string | null
    details?: string | null
    avatar?: string | null
    members?: number | null
    location?: string | null
    privacy?: boolean | null
  }

  export type CommunityUpdateWithoutManagerInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateManyWithoutCommunityNestedInput
    Community_member?: Community_memberUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutManagerInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateManyWithoutCommunityNestedInput
    Community_member?: Community_memberUncheckedUpdateManyWithoutCommunityNestedInput
    Tournament?: TournamentUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutManagerInput = {
    id_community?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Community_memberCreateManyMemberInput = {
    join_date?: Date | string | null
    id_community?: number | null
  }

  export type PlayerCreateManyMemberInput = {
    id_tour?: number | null
  }

  export type TeamCreateManyMemberInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    id_tour?: number | null
    key_team?: string | null
    open?: boolean | null
  }

  export type Team_memberCreateManyMemberInput = {
    id_team?: number | null
    status?: boolean | null
  }

  export type Community_memberUpdateWithoutMemberInput = {
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Community?: CommunityUpdateOneWithoutCommunity_memberNestedInput
  }

  export type Community_memberUncheckedUpdateWithoutMemberInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Community_memberUncheckedUpdateManyWithoutMemberInput = {
    id_co_member?: IntFieldUpdateOperationsInput | number
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_community?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerUpdateWithoutMemberInput = {
    Tournament?: TournamentUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMemberInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerUncheckedUpdateManyWithoutMemberInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamUpdateWithoutMemberInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tournament?: TournamentUpdateOneWithoutTeamNestedInput
    Team_member?: Team_memberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMemberInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Team_member?: Team_memberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutMemberInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Team_memberUpdateWithoutMemberInput = {
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Team?: TeamUpdateOneWithoutTeam_memberNestedInput
  }

  export type Team_memberUncheckedUpdateWithoutMemberInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    id_team?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Team_memberUncheckedUpdateManyWithoutMemberInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    id_team?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Prize_sponsorCreateManyPrizeInput = {
    user_name?: string | null
  }

  export type Prize_sponsorUpdateWithoutPrizeInput = {
    Sponsor?: SponsorUpdateOneWithoutPrize_sponsorNestedInput
  }

  export type Prize_sponsorUncheckedUpdateWithoutPrizeInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prize_sponsorUncheckedUpdateManyWithoutPrizeInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Prize_sponsorCreateManySponsorInput = {
    id_prize?: number | null
  }

  export type Prize_sponsorUpdateWithoutSponsorInput = {
    Prize?: PrizeUpdateOneWithoutPrize_sponsorNestedInput
  }

  export type Prize_sponsorUncheckedUpdateWithoutSponsorInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    id_prize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Prize_sponsorUncheckedUpdateManyWithoutSponsorInput = {
    id_prize_sponsor?: IntFieldUpdateOperationsInput | number
    id_prize?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Team_memberCreateManyTeamInput = {
    user_name?: string | null
    status?: boolean | null
  }

  export type Team_memberUpdateWithoutTeamInput = {
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Member?: MemberUpdateOneWithoutTeam_memberNestedInput
  }

  export type Team_memberUncheckedUpdateWithoutTeamInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Team_memberUncheckedUpdateManyWithoutTeamInput = {
    id_team_member?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlayerCreateManyTournamentInput = {
    user_name?: string | null
  }

  export type PrizeCreateManyTournamentInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_type?: number | null
    id_admin?: number | null
  }

  export type TeamCreateManyTournamentInput = {
    name?: string | null
    members?: number | null
    players?: number | null
    key_team?: string | null
    open?: boolean | null
    user_name?: string | null
  }

  export type PlayerUpdateWithoutTournamentInput = {
    Member?: MemberUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTournamentInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerUncheckedUpdateManyWithoutTournamentInput = {
    id_player?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrizeUpdateWithoutTournamentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Type?: TypeUpdateOneWithoutPrizeNestedInput
    Prize_sponsor?: Prize_sponsorUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateWithoutTournamentInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_type?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Prize_sponsor?: Prize_sponsorUncheckedUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateManyWithoutTournamentInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_type?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamUpdateWithoutTournamentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Member?: MemberUpdateOneWithoutTeamNestedInput
    Team_member?: Team_memberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTournamentInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    Team_member?: Team_memberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutTournamentInput = {
    id_team?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    players?: NullableIntFieldUpdateOperationsInput | number | null
    key_team?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrizeCreateManyTypeInput = {
    name?: string | null
    spots?: number | null
    group_spot?: number | null
    id_tour?: number | null
    id_admin?: number | null
  }

  export type PrizeUpdateWithoutTypeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Tournament?: TournamentUpdateOneWithoutPrizeNestedInput
    Prize_sponsor?: Prize_sponsorUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateWithoutTypeInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    Prize_sponsor?: Prize_sponsorUncheckedUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateManyWithoutTypeInput = {
    id_prize?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: NullableIntFieldUpdateOperationsInput | number | null
    group_spot?: NullableIntFieldUpdateOperationsInput | number | null
    id_tour?: NullableIntFieldUpdateOperationsInput | number | null
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}