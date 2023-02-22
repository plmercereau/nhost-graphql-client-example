export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  update_todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_Root_Delete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Delete_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_Insert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Insert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_Update_TodosArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_Update_Todos_By_PkArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_Update_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type Query_Root_TodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_Root_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todos_stream: Array<Todos>;
};


export type Subscription_Root_TodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_Root_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_Todos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  contents: Scalars['String'];
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  contents?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export type Todos_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'todos_pkey';

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  contents?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  contents?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export type Todos_Select_Column =
  /** column name */
  | 'contents'
  /** column name */
  | 'id';

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  contents?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  contents?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "todos" */
export type Todos_Update_Column =
  /** column name */
  | 'contents'
  /** column name */
  | 'id';

export type Todos_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};


export default {
  introspection: {
    "__schema": {
      "queryType": {
        "name": "query_root"
      },
      "mutationType": {
        "name": "mutation_root"
      },
      "subscriptionType": {
        "name": "subscription_root"
      },
      "types": [
        {
          "kind": "SCALAR",
          "name": "Boolean"
        },
        {
          "kind": "SCALAR",
          "name": "Int"
        },
        {
          "kind": "SCALAR",
          "name": "String"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "String_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_ilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_iregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_like",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nilike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_niregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nlike",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nregex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_nsimilar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_regex",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "_similar",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "cursor_ordering",
          "enumValues": [
            {
              "name": "ASC"
            },
            {
              "name": "DESC"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "mutation_root",
          "fields": [
            {
              "name": "delete_todos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "todos_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_todos_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "insert_todos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "todos_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "insert_todos_one",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "todos_insert_input",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_on_conflict",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "update_todos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "todos_bool_exp",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_todos_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_set_input",
                    "ofType": null
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "todos_pk_columns_input",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "update_todos_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "todos_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "todos_updates",
                          "ofType": null
                        }
                      }
                    }
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "order_by",
          "enumValues": [
            {
              "name": "asc"
            },
            {
              "name": "asc_nulls_first"
            },
            {
              "name": "asc_nulls_last"
            },
            {
              "name": "desc"
            },
            {
              "name": "desc_nulls_first"
            },
            {
              "name": "desc_nulls_last"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "query_root",
          "fields": [
            {
              "name": "todos",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "todos_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "todos_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "subscription_root",
          "fields": [
            {
              "name": "todos",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "todos_order_by",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_bool_exp",
                    "ofType": null
                  }
                }
              ]
            },
            {
              "name": "todos_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                    }
                  }
                }
              ]
            },
            {
              "name": "todos_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "todos_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_bool_exp",
                    "ofType": null
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "todos",
          "fields": [
            {
              "name": "contents",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_bool_exp",
          "inputFields": [
            {
              "name": "_and",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_not",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "todos_bool_exp",
                "ofType": null
              }
            },
            {
              "name": "_or",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "todos_bool_exp",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "contents",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "uuid_comparison_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "todos_constraint",
          "enumValues": [
            {
              "name": "todos_pkey"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_insert_input",
          "inputFields": [
            {
              "name": "contents",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "todos_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_on_conflict",
          "inputFields": [
            {
              "name": "constraint",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "todos_constraint",
                  "ofType": null
                }
              }
            },
            {
              "name": "update_columns",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "todos_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "todos_bool_exp",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_order_by",
          "inputFields": [
            {
              "name": "contents",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_pk_columns_input",
          "inputFields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "todos_select_column",
          "enumValues": [
            {
              "name": "contents"
            },
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_set_input",
          "inputFields": [
            {
              "name": "contents",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_stream_cursor_input",
          "inputFields": [
            {
              "name": "initial_value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "todos_stream_cursor_value_input",
                  "ofType": null
                }
              }
            },
            {
              "name": "ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_stream_cursor_value_input",
          "inputFields": [
            {
              "name": "contents",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "todos_update_column",
          "enumValues": [
            {
              "name": "contents"
            },
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "todos_updates",
          "inputFields": [
            {
              "name": "_set",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "todos_set_input",
                "ofType": null
              }
            },
            {
              "name": "where",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "todos_bool_exp",
                  "ofType": null
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "uuid"
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "uuid_comparison_exp",
          "inputFields": [
            {
              "name": "_eq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_gte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_in",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            },
            {
              "name": "_is_null",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "name": "_lt",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_lte",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_neq",
              "type": {
                "kind": "SCALAR",
                "name": "uuid",
                "ofType": null
              }
            },
            {
              "name": "_nin",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                  }
                }
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "Any"
        }
      ],
      "directives": []
    }
  } as const,
  types: {} as {
    Scalars: Scalars,
    String_Comparison_Exp: String_Comparison_Exp,
    Mutation_Root: Mutation_Root,
    Mutation_Root_Delete_TodosArgs: Mutation_Root_Delete_TodosArgs,
    Mutation_Root_Delete_Todos_By_PkArgs: Mutation_Root_Delete_Todos_By_PkArgs,
    Mutation_Root_Insert_TodosArgs: Mutation_Root_Insert_TodosArgs,
    Mutation_Root_Insert_Todos_OneArgs: Mutation_Root_Insert_Todos_OneArgs,
    Mutation_Root_Update_TodosArgs: Mutation_Root_Update_TodosArgs,
    Mutation_Root_Update_Todos_By_PkArgs: Mutation_Root_Update_Todos_By_PkArgs,
    Mutation_Root_Update_Todos_ManyArgs: Mutation_Root_Update_Todos_ManyArgs,
    Query_Root: Query_Root,
    Query_Root_TodosArgs: Query_Root_TodosArgs,
    Query_Root_Todos_By_PkArgs: Query_Root_Todos_By_PkArgs,
    Subscription_Root: Subscription_Root,
    Subscription_Root_TodosArgs: Subscription_Root_TodosArgs,
    Subscription_Root_Todos_By_PkArgs: Subscription_Root_Todos_By_PkArgs,
    Subscription_Root_Todos_StreamArgs: Subscription_Root_Todos_StreamArgs,
    Todos: Todos,
    Todos_Bool_Exp: Todos_Bool_Exp,
    Todos_Insert_Input: Todos_Insert_Input,
    Todos_Mutation_Response: Todos_Mutation_Response,
    Todos_On_Conflict: Todos_On_Conflict,
    Todos_Order_By: Todos_Order_By,
    Todos_Pk_Columns_Input: Todos_Pk_Columns_Input,
    Todos_Set_Input: Todos_Set_Input,
    Todos_Stream_Cursor_Input: Todos_Stream_Cursor_Input,
    Todos_Stream_Cursor_Value_Input: Todos_Stream_Cursor_Value_Input,
    Todos_Updates: Todos_Updates,
    Uuid_Comparison_Exp: Uuid_Comparison_Exp
  }
}