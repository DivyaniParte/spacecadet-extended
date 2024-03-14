"use client";
import { Datepicker } from "headless-datetimepicker";

function DatePicker({
  date,
  setDate,
  label,
}: {
  date: Date | null;
  setDate: any;
  label: string;
}) {
  return (
    <>
      <Datepicker value={date} onChange={setDate} className="relative" as="div">
        <Datepicker.Input
          name="datePicker"
          id="datePicker"
          aria-label={label}
          className="border-2 border-violet-500 px-5 py-3 lg:px-10 lg:py-4  rounded-full outline-0 appearance-none bg-black w-64 text-center relative z-10 hover:bg-violet-950"
        ></Datepicker.Input>
        <Datepicker.Picker defaultType="day" className="absolute">
          {({ monthName, year }) => (
            <div className="relative bg-gray-950 text-xs border-2 border-violet-500 p-3  rounded-3xl w-full">
              <div className="flex w-full items-center justify-between space-x-6 py-2 rtl:space-x-reverse">
                <Datepicker.Button
                  action="prev"
                  className="rounded-full p-2  font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
                >
                  &lt;
                </Datepicker.Button>
                <div className="flex">
                  <span className="leading-2 p-2">{monthName}</span>
                  <span className="leading-2 p-2">{year}</span>
                </div>
                <Datepicker.Button
                  action="next"
                  className="rounded-full p-2  font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
                >
                  &gt;
                </Datepicker.Button>
              </div>
              <Datepicker.Items className="grid w-full auto-rows-max gap-0.5  scroll-smooth grid-cols-7 ">
                {({ items }) =>
                  items.map((item) => (
                    <Datepicker.Item
                      key={item.key}
                      item={item}
                      action="close"
                      className={`grid items-center hover:bg-violet-950 justify-center rounded-full py-1  font-medium select-none h-8 w-8 ${
                        item.isSelected && "bg-violet-500"
                      } ${
                        "isInCurrentMonth" in item && item.isInCurrentMonth
                          ? "text-gray-600"
                          : "hover:text-white"
                      }`}
                    >
                      {item.isHeader ? item.text.substring(0, 2) : item.text}
                    </Datepicker.Item>
                  ))
                }
              </Datepicker.Items>
              <Datepicker.Button action="today" className="mt-4 w-full ">
                Today
              </Datepicker.Button>
            </div>
          )}
        </Datepicker.Picker>
      </Datepicker>
    </>
  );
}

export default DatePicker;
