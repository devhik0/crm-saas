export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          _id: string;
          delta: string | null;
          deltaType: string | null;
          metric: string | null;
          metricPrev: string | null;
          title: string | null;
        };
        Insert: {
          _id: string;
          delta?: string | null;
          deltaType?: string | null;
          metric?: string | null;
          metricPrev?: string | null;
          title?: string | null;
        };
        Update: {
          _id?: string;
          delta?: string | null;
          deltaType?: string | null;
          metric?: string | null;
          metricPrev?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      contacts: {
        Row: {
          _id: string;
          capacity: string | null;
          costs: string | null;
          lastEdited: string | null;
          owner: string | null;
          region: string | null;
          status: string | null;
        };
        Insert: {
          _id: string;
          capacity?: string | null;
          costs?: string | null;
          lastEdited?: string | null;
          owner?: string | null;
          region?: string | null;
          status?: string | null;
        };
        Update: {
          _id?: string;
          capacity?: string | null;
          costs?: string | null;
          lastEdited?: string | null;
          owner?: string | null;
          region?: string | null;
          status?: string | null;
        };
        Relationships: [];
      };
      helpTickets: {
        Row: {
          _id: string;
          assignee: string | null;
          id: number | null;
          lastEdited: string | null;
          requester: string | null;
          status: string | null;
          subject: string | null;
        };
        Insert: {
          _id: string;
          assignee?: string | null;
          id?: number | null;
          lastEdited?: string | null;
          requester?: string | null;
          status?: string | null;
          subject?: string | null;
        };
        Update: {
          _id?: string;
          assignee?: string | null;
          id?: number | null;
          lastEdited?: string | null;
          requester?: string | null;
          status?: string | null;
          subject?: string | null;
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
      tasks: {
        Row: {
          _id: string;
          category_id: string;
          description: string;
          name: string;
          time: Date;
        };
        Insert: {
          _id?: string;
          category_id?: string;
          description: string;
          name: string;
          time?: Date;
        };
        Update: {
          _id?: string;
          category_id?: string;
          description?: string;
          name?: string;
          time?: Date;
        };
        Relationships: [
          {
            foreignKeyName: "tasks_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "task_categories";
            referencedColumns: ["_id"];
          },
        ];
      };
      tickets: {
        Row: {
          _id: string;
          Completed: number | null;
          Failed: number | null;
          "In Progress": number | null;
          Month: string | null;
        };
        Insert: {
          _id: string;
          Completed?: number | null;
          Failed?: number | null;
          "In Progress"?: number | null;
          Month?: string | null;
        };
        Update: {
          _id?: string;
          Completed?: number | null;
          Failed?: number | null;
          "In Progress"?: number | null;
          Month?: string | null;
        };
        Relationships: [];
      };
      trackers: {
        Row: {
          _id: string;
          color: string | null;
          tooltip: string | null;
        };
        Insert: {
          _id: string;
          color?: string | null;
          tooltip?: string | null;
        };
        Update: {
          _id?: string;
          color?: string | null;
          tooltip?: string | null;
        };
        Relationships: [];
      };
      transactions: {
        Row: {
          _id: string;
          amount: string | null;
          item: string | null;
          link: string | null;
          status: string | null;
          transactionID: string | null;
          user: string | null;
        };
        Insert: {
          _id: string;
          amount?: string | null;
          item?: string | null;
          link?: string | null;
          status?: string | null;
          transactionID?: string | null;
          user?: string | null;
        };
        Update: {
          _id?: string;
          amount?: string | null;
          item?: string | null;
          link?: string | null;
          status?: string | null;
          transactionID?: string | null;
          user?: string | null;
        };
        Relationships: [];
      };
      visitors: {
        Row: {
          _id: string;
          "Bounce Rate": number | null;
          Month: string | null;
          "Page Views": number | null;
          Visitors: number | null;
        };
        Insert: {
          _id: string;
          "Bounce Rate"?: number | null;
          Month?: string | null;
          "Page Views"?: number | null;
          Visitors?: number | null;
        };
        Update: {
          _id?: string;
          "Bounce Rate"?: number | null;
          Month?: string | null;
          "Page Views"?: number | null;
          Visitors?: number | null;
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
