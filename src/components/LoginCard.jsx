import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function LoginCard() {
  return (
    <Card>
      <div className="bg-slate-100 rounded-sm">
        <CardHeader>
          <CardTitle>Not loggedin?</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl mx-3 text-slate-900 hover:text-green-500">
            <Link to="/login">Login</Link>
          </h1>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </div>
    </Card>
  );
}

export default LoginCard;
