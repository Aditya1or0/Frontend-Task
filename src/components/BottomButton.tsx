import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const BottomButton: React.FC = () => {
  const [isAcceptDrawerOpen, setIsAcceptDrawerOpen] = React.useState(false);
  const [isRejectDrawerOpen, setIsRejectDrawerOpen] = React.useState(false);
  const [rejectionReason, setRejectionReason] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSubmit = () => {
    setIsRejectDrawerOpen(false);
  };

  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex justify-around m-4">
      <div className="flex justify-around gap-2">
        <Button variant="outline" onClick={() => setIsRejectDrawerOpen(true)}>
          Reject Order
        </Button>
        <Button
          className="bg-sky-800 hover:bg-sky-700 text-white"
          onClick={() => setIsAcceptDrawerOpen(true)}
        >
          Accept Selected
        </Button>
      </div>

      {/* Accept Drawer */}
      <Drawer open={isAcceptDrawerOpen} onOpenChange={setIsAcceptDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-left flex left-0 ml-4 text-sky-800 mb-2">
              Accept Partially
            </DrawerTitle>
            <DrawerDescription className="flex text-left ml-4 text-wrap">
              A partial order will be sent to livelong for confirmation. Please
              provide additional details if needed.
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsAcceptDrawerOpen(false)}
                className="w-1/2"
              >
                Back
              </Button>
              <Button className="w-1/2 bg-sky-800">Submit</Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Reject Drawer */}
      <Drawer open={isRejectDrawerOpen} onOpenChange={setIsRejectDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-left text-xl font-semibold text-sky-800">
              Order Rejection
            </DrawerTitle>
            <DrawerDescription className="text-left text-gray-600 text-sm">
              Are you sure you want to reject this order? Please review the
              details carefully before proceeding, as this action cannot be
              undone.
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4 pb-4">
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">
                Select Reason for Rejection
              </h3>

              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="location" id="location" />
                  <Label htmlFor="location" className="text-sm">
                    Location not serviceable
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="medicine" id="medicine" />
                  <Label htmlFor="medicine" className="text-sm">
                    Medicine not available
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="others" id="others" />
                  <Label htmlFor="others" className="text-sm">
                    Others
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <Label htmlFor="rejection-reason" className="block mb-2 text-sm">
                Reason For Order Rejection*
              </Label>
              <Textarea
                id="rejection-reason"
                placeholder="Please enter the reason"
                disabled={selectedOption !== "others"}
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="w-full border rounded-md resize-none h-24"
              />
            </div>

            <div className="flex gap-3 mt-8">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="flex-1 border-[#026AA2] text-[#026AA2] hover:bg-sky-50"
                >
                  Back
                </Button>
              </DrawerClose>
              <Button
                className="flex-1 bg-[#026AA2] hover:bg-sky-800 text-white"
                disabled={
                  !selectedOption ||
                  (selectedOption === "others" && !rejectionReason)
                }
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BottomButton;
