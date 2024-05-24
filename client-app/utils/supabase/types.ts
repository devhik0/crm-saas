export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          _id: string;
          delta: string;
          deltaType: string;
          metric: string;
          metricPrev: string;
          title: string;
        };
        Insert: {
          _id: string;
          delta: string;
          deltaType: string;
          metric: string;
          metricPrev: string;
          title: string;
        };
        Update: {
          _id?: string;
          delta?: string;
          deltaType?: string;
          metric?: string;
          metricPrev?: string;
          title?: string;
        };
        Relationships: [];
      };
      contacts: {
        Row: {
          _id: string;
          capacity: string;
          costs: string;
          lastEdited: string;
          owner: string;
          region: string;
          status: string;
        };
        Insert: {
          _id: string;
          capacity: string;
          costs: string;
          lastEdited: string;
          owner: string;
          region: string;
          status: string;
        };
        Update: {
          _id?: string;
          capacity?: string;
          costs?: string;
          lastEdited?: string;
          owner?: string;
          region?: string;
          status?: string;
        };
        Relationships: [];
      };
      helpTickets: {
        Row: {
          _id: string;
          assignee: string;
          id: number;
          lastEdited: string;
          requester: string;
          status: string;
          subject: string;
        };
        Insert: {
          _id: string;
          assignee: string;
          id: number;
          lastEdited: string;
          requester: string;
          status: string;
          subject: string;
        };
        Update: {
          _id?: string;
          assignee?: string;
          id?: number;
          lastEdited?: string;
          requester?: string;
          status?: string;
          subject?: string;
        };
        Relationships: [];
      };
      task_categories: {
        Row: {
          _id: string;
          name: string;
        };
        Insert: {
          _id?: string;
          name: string;
        };
        Update: {
          _id?: string;
          name?: string;
        };
        Relationships: [];
      };
      task_statuses: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      tasks: {
        Row: {
          _id: string;
          category_id: string;
          description: string;
          name: string;
          status_id: string;
          time: string;
        };
        Insert: {
          _id?: string;
          category_id?: string;
          description: string;
          name: string;
          status_id?: string;
          time?: string;
        };
        Update: {
          _id?: string;
          category_id?: string;
          description?: string;
          name?: string;
          status_id?: string;
          time?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tasks_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "task_categories";
            referencedColumns: ["_id"];
          },
          {
            foreignKeyName: "tasks_status_id_fkey";
            columns: ["status_id"];
            isOneToOne: false;
            referencedRelation: "task_statuses";
            referencedColumns: ["id"];
          },
        ];
      };
      tickets: {
        Row: {
          _id: string;
          Completed: number;
          Failed: number;
          "In Progress": number;
          Month: string;
        };
        Insert: {
          _id: string;
          Completed: number;
          Failed: number;
          "In Progress": number;
          Month: string;
        };
        Update: {
          _id?: string;
          Completed?: number;
          Failed?: number;
          "In Progress"?: number;
          Month?: string;
        };
        Relationships: [];
      };
      trackers: {
        Row: {
          _id: string;
          color: string;
          tooltip: string;
        };
        Insert: {
          _id: string;
          color: string;
          tooltip: string;
        };
        Update: {
          _id?: string;
          color?: string;
          tooltip?: string;
        };
        Relationships: [];
      };
      transactions: {
        Row: {
          _id: string;
          amount: string;
          item: string;
          link: string;
          status: string;
          transactionID: string;
          user: string;
        };
        Insert: {
          _id: string;
          amount: string;
          item: string;
          link: string;
          status: string;
          transactionID: string;
          user: string;
        };
        Update: {
          _id?: string;
          amount?: string;
          item?: string;
          link?: string;
          status?: string;
          transactionID?: string;
          user?: string;
        };
        Relationships: [];
      };
      visitors: {
        Row: {
          _id: string;
          "Bounce Rate": number;
          Month: string;
          "Page Views": number;
          Visitors: number;
        };
        Insert: {
          _id: string;
          "Bounce Rate": number;
          Month: string;
          "Page Views": number;
          Visitors: number;
        };
        Update: {
          _id?: string;
          "Bounce Rate"?: number;
          Month?: string;
          "Page Views"?: number;
          Visitors?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
