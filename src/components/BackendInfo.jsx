import { HiOutlineBadgeCheck } from "react-icons/hi";

function BackendInfo() {
  return (
    <div className="bg-white border rounded-2xl shadow-lg py-8 px-16">
      {/*skills_content*/}
      <h3 className="font-medium text-center mb-4">
        {/*skills_title*/}Backend
      </h3>
      <div className="flex justify-center gap-x-8">
        {/*skills_box*/}
        <div className="grid items-start gap-y-4">
          {/*skills_group*/}
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}NodeJs</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}Python</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}Java</h3>
            </div>
          </div>
        </div>
        <div className="grid items-start gap-y-4">
          {/*skills_group*/}
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}MongoDB</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}MySQL</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}C#</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackendInfo;
