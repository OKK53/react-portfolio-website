import { HiOutlineBadgeCheck } from "react-icons/hi";

function FrontendInfo() {
  return (
    <div className="bg-white border rounded-2xl shadow-lg py-8 px-16">
      {/*skills_content*/}
      <h3 className="font-medium text-center mb-4">
        {/*skills_title*/}Frontend
      </h3>
      <div className="flex justify-center gap-x-8">
        {/*skills_box*/}
        <div className="grid items-start gap-y-4">
          {/*skills_group*/}
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}HTML</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}CSS</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}JavaScript</h3>
            </div>
          </div>
        </div>
        <div className="grid items-start gap-y-4">
          {/*skills_group*/}
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}Tailwind</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}React</h3>
            </div>
          </div>
          <div className="flex gap-x-2">
            {/*skills_data*/}
            <HiOutlineBadgeCheck className="text-lg" />
            <div>
              <h3 className="text-sm">{/*skills_name*/}Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendInfo;
