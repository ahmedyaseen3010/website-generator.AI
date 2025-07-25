// src/website/schemas/website.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebsiteDocument = Website & Document;

@Schema({ 
  timestamps: true,
  collection: 'websites'
})
export class Website {
  @Prop({ required: true, trim: true })
  idea: string;

  @Prop({ 
    type: [{
      name: { type: String, required: true },
      content: { type: String, required: true },
      order: { type: Number, required: true }
    }],
    required: true 
  })
  sections: {
    name: string;
    content: string;
    order: number;
  }[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const WebsiteSchema = SchemaFactory.createForClass(Website);