import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add new Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="e.g Mandiri"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="e.g 372837892"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name/Holder</label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="e.g PT SportOn Digital"
            />
          </div>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create BankInfo</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
