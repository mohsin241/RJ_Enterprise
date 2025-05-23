import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap } from "./sitemap";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/products', (req, res) => {
    res.json({
      message: 'Success',
      data: [
        {
          id: 'tmt-bars',
          name: 'TMT Bars',
          description: 'High-strength thermo-mechanically treated steel bars for construction',
          category: 'construction'
        },
        {
          id: 'mild-steel-plates',
          name: 'Mild Steel Plates',
          description: 'Premium quality mild steel plates for industrial applications',
          category: 'industrial'
        },
        {
          id: 'hot-rolled-coils',
          name: 'Hot Rolled Coils',
          description: 'Versatile hot rolled steel coils for manufacturing',
          category: 'manufacturing'
        }
      ]
    });
  });

  app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    
    // In a real application, you would fetch this from a database
    const products = {
      'tmt-bars': {
        id: 'tmt-bars',
        name: 'TMT Bars',
        description: 'High-quality thermo-mechanically treated steel reinforcement bars with excellent ductility and weldability.',
        category: 'construction'
      },
      'mild-steel-plates': {
        id: 'mild-steel-plates',
        name: 'Mild Steel Plates',
        description: 'Premium-quality mild steel plates with excellent formability, weldability and machinability for various applications.',
        category: 'industrial'
      },
      'hot-rolled-coils': {
        id: 'hot-rolled-coils',
        name: 'Hot Rolled Coils',
        description: 'Versatile hot rolled steel coils with uniform mechanical properties ideal for automotive, manufacturing and construction.',
        category: 'manufacturing'
      }
    };
    
    const product = products[id as keyof typeof products];
    
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    
    res.json({
      message: 'Success',
      data: product
    });
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, company, phone, product, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          message: 'Missing required fields'
        });
      }
      
      // In a real app, you would save this to a database and/or send an email
      
      res.json({
        message: 'Message sent successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error processing your request'
      });
    }
  });
  
  // Generate XML sitemap
  app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });
  
  // Generate robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /
Sitemap: https://www.rjenterpriseinfo.com/sitemap.xml`);
  });

  const httpServer = createServer(app);

  return httpServer;
}
