import React from "react";
import {
  Form,
  Input,
  Radio,
  Checkbox,
  Upload,
  Button,
  Space,
  Select,
} from "antd";
import "./form.scss";

const { Search } = Input;
const { TextArea } = Input;

const options = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Form1 = () => {

    const onFinish = (values) => {
        console.log("Received values of form:", values);
        localStorage.setItem("formValues", JSON.stringify(values));
      };


  return (
    <>
      <div className="container">
        <Form
          name="trigger"
          style={{ Width: "300px" }}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            hasFeedback
            label="نام"
            name="name"
            validateTrigger="onBlur"
            rules={[{ max: 7, required: true }]}
          >
            <Input placeholder="نام خود را وارد کنید" />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="نام خانوادگی"
            name="family"
            validateDebounce={1000}
            rules={[{ max: 15, required: true }]}
          >
            <Input placeholder="نام خانوادگی را وارد کنید" />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="ایمیل"
            name="email"
            validateFirst
            rules={[
              { max: 400, required: true, message: "ایمیل خود را وارد کنید" },
            ]}
          >
            <Input placeholder="ایمیل خود را وارد کنید" />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="شماره موبایل"
            name="contact"
            validateFirst
            rules={[
              {
                required: true,
                message: "شماره وارد شده صحیح نیست!",
                min: 11,
                max: 99,
              },
            ]}
          >
            <Input placeholder="شماره خود را وارد کنید" />
          </Form.Item>

          <Form.Item name="gender" label="جنسیت:" rules={[{ required: true }]} hasFeedback>
            <Radio.Group>
              <Radio value="men"> مرد</Radio>
              <Radio value="women"> زن </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="بهترین موضوع شما:"
            name="disabled"
            valuePropName="checked"
          >
            <Checkbox>انگلیسی</Checkbox>
            <Checkbox>ریاضیات</Checkbox>
            <Checkbox>فیزیک</Checkbox>
          </Form.Item>

          <Form.Item label="رزومه خود را آپلود کنید">
            <Upload>
              <Button>کلیک کنید +</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            hasFeedback
            label="لینک فضای مجازی"
            name="url"
            validateFirst
            rules={[
              {
                max: 19,
                required: true,
                message: "لینک فضای مجازی خود را وارد کنید",
              },
            ]}
          >
            <Space.Compact>
              <Search
                addonBefore="https://"
                placeholder="input search text"
                allowClear
              />
            </Space.Compact>
          </Form.Item>

          <Form.Item label="انتخاب کنید تگ ها را">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="تگ ها"
              onChange={handleChange}
              options={options}
            />
          </Form.Item>

          <Form.Item label="درباره خود بنویسید">
            <TextArea rows={5} />
          </Form.Item>

          <div className="container-buttons">
            <Button type="primary" danger ghost>
              لغو
            </Button> 
            
            <Button type="primary" ghost  htmlType="submit">
             ذخیره
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Form1;



