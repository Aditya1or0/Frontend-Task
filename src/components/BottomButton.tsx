import React from "react"
import { Drawer,DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "./ui/textarea"


const BottomButton: React.FC = () => {
 
  const [isAcceptDrawerOpen, setIsAcceptDrawerOpen] = React.useState(false)
  const [isRejectDrawerOpen, setIsRejectDrawerOpen] = React.useState(false)
  const [rejectionReason, setRejectionReason] = React.useState("")
  const [selectedOption, setSelectedOption] = React.useState("")

  return (
    <div className="flex justify-around m-4">
      <Button variant="outline" onClick={() => setIsRejectDrawerOpen(true)}>
        Reject Order
      </Button>
      <Button className="bg-sky-800 hover:bg-sky-700 text-white" onClick={() => setIsAcceptDrawerOpen(true)}>
        Accept Selected
      </Button>

      {/* Accept Drawer */}
      <Drawer open={isAcceptDrawerOpen} onOpenChange={setIsAcceptDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex left-0 ml-4 text-sky-800 mb-2">Accept Partially</DrawerTitle>
            <DrawerDescription className="flex text-left ml-4 text-wrap">
              A partial order will be sent to livelong for confirmation. Please provide additional details if needed.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{/* Add your form or content here */}</div>
          <DrawerFooter className="flex justify-between">
            
            <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsAcceptDrawerOpen(false)}
              className="w-1/2">
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
          <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold text-sky-800 mb-2">Order Rejection</h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to reject this order? Please review the details carefully before proceeding, as this
              action cannot be undone.
            </p>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Select Reason for Rejection</h3>

              <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="location" id="location" />
                  <Label htmlFor="location">Location not serviceable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medicine" id="medicine" />
                  <Label htmlFor="medicine">Medicine not available</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="others" id="others" />
                  <Label htmlFor="others">Others</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <Label htmlFor="rejection-reason" className="block mb-1">
                Reason For Order Rejection*
              </Label>
              <Textarea
                id="rejection-reason"
                placeholder="Please enter the reason"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="w-full border rounded-md"
              />
            </div>

            <div className="flex justify-between">
              <DrawerClose asChild>
                <Button variant="outline" className="border-sky-800 text-sky-800 hover:bg-sky-50">
                  Back
                </Button>
              </DrawerClose>
              <Button className="bg-gray-400 hover:bg-gray-500 text-white">Submit</Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default BottomButton

