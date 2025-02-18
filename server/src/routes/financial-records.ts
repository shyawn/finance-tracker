// import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const express = require("express");
const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: any, res: any) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({
      // userId: userId,
      userId,
    });
    if (records.length === 0) {
      //   return res.status(404).send("No records found for the user.");
      res.status(404).send("No records found for the user.");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req: any, res: any) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(200).send(savedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );
    if (!record) {
      return res.status(404).send();
    }
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) {
      return res.status(404).send();
    }
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

// export default router;
module.exports = router;
