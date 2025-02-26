import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white px-6 rounded-lg shadow-md w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login
          </CardTitle>
        </CardHeader>

        <form className="space-y-4">
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Gmail Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Gmail"
              required
              className="w-full"
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </Button>
          <CardFooter>
            <p className="text-sm font-semibold text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-700   bg-white text-sm font-semibold underline"
              >
                Register Now
              </Link>
            </p>
          </CardFooter>
        </form>
      </div>
    </Card>
  );
};

export default Login;
