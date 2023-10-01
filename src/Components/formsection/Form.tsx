import React, { useEffect, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { ApplicationForm } from '../../api/types';
import { getApplicationForm, updateApplicationForm } from '../../api/api';

const Form: React.FC = () => {

    const [formData, setFormData] = useState<ApplicationForm | null>(null);

    const [fields, setFields] = useState([
        {
            type: '',
            question: '',
            choices: [''],
            enableOther: false,
            maxChoiceAllowed: '',
            disqualifyOnNo: false
        }
    ]);

    const handleAdd = () => {
        const newFields = [
            ...fields,
            {
                type: '',
                question: '',
                choices: [''],
                enableOther: false,
                maxChoiceAllowed: '',
                disqualifyOnNo: false
            }
        ];
        setFields(newFields);
    };

    const handleDelete = (index: number) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    const handleTypeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
        const newFields = [...fields];
        newFields[index].type = event.target.value;
        setFields(newFields);
    };

    const handleQuestionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newFields = [...fields];
        newFields[index].question = event.target.value;
        setFields(newFields);
    };

    const handleChoiceChange = (index: number, choiceIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newFields = [...fields];
        newFields[index].choices[choiceIndex] = event.target.value;
        setFields(newFields);
    };

    const handleAddChoice = (index: number) => {
        const newFields = [...fields];
        newFields[index].choices.push('');
        setFields(newFields);
    };

    useEffect(() => {
        // Fetch application form data when the component mounts
        const version = 'v1';
        const programId = '12345';

        getApplicationForm(version, programId)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.error('Error fetching application form:', error);
            });
    }, []);

    const handleUpdateFormData = () => {
        if (formData) {
            // Modify formData here
            updateApplicationForm('v1', '12345', formData)
                .then(() => {
                    console.log('Application form data updated successfully.');
                })
                .catch((error) => {
                    console.error('Error updating application form data:', error);
                });
        }
    };

    return (
        <div className="p-4">
            {fields.map((field, index) => (
                <div key={index} className="mt-4 relative">
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => handleDelete(index)}
                            className="text-[#A80000]"
                        >
                            X Delete question
                        </button>
                        <button
                            type="button"
                            className="bg-[#087B2F] text-white px-4 py-2 rounded-md"
                            onClick={handleUpdateFormData}
                        >
                            Save
                        </button>
                    </div>
                    <div className="items-center">
                        <p className="font-bold">Type</p>
                        <select
                            value={field.type}
                            onChange={(event) => handleTypeChange(index, event)}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-sm"
                        >
                            <option value=""></option>
                            <option value="paragraph">Paragraph</option>
                            <option value="shortanswer">Short answer</option>
                            <option value="yesno">Yes/No</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="multichoice">Multiple choice</option>
                            <option value="date" className="px-2">Date</option>
                            <option value="number">Number</option>
                            <option value="fileupload">File upload</option>
                            <option value="videoquestion">Video question</option>
                        </select>
                    </div>
                    {field.type === 'paragraph' && (
                        <div className="mt-4">
                            <p className="font-bold">Question</p>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={field.question}
                                onChange={(event) => handleQuestionChange(index, event)}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-sm"
                            />
                        </div>
                    )}
                    {field.type === 'multichoice' && (
                        <div className="mt-4">
                            <p className="font-bold">Question</p>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={field.question}
                                onChange={(event) => handleQuestionChange(index, event)}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-sm"
                            />
                            {field.choices.map((choice, choiceIndex) => (
                                <div key={choiceIndex} className="flex items-center space-x-2 mt-2">
                                    <input
                                        type="text"
                                        placeholder="Enter choice"
                                        value={choice}
                                        onChange={(event) => handleChoiceChange(index, choiceIndex, event)}
                                        className='w-full p-3 border border-gray-300 rounded-sm'
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleAddChoice(index)}
                                        className="text-green-500 text-2sm"
                                    >
                                        +
                                    </button>
                                </div>
                            ))}
                            <div className="mt-2">
                                <input
                                    type="checkbox"
                                    id={`enableOther-${index}`}
                                    checked={field.enableOther}
                                    onChange={() => {
                                        const newFields = [...fields];
                                        newFields[index].enableOther = !field.enableOther;
                                        setFields(newFields);
                                    }}
                                />
                                <label htmlFor={`enableOther-${index}`} className="ml-2">Enable “Other” option</label>
                            </div>
                            <div className="mt-2">
                                <p className="font-bold">Max choice allowed</p>
                                <input
                                    type="number"
                                    placeholder="Enter number of choices allowed here"
                                    className='mt-2 w-full p-3 border border-gray-300 rounded-sm'
                                    value={field.maxChoiceAllowed}
                                    onChange={(event) => {
                                        const newFields = [...fields];
                                        newFields[index].maxChoiceAllowed = event.target.value;
                                        setFields(newFields);
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {field.type === 'dropdown' && (
                        <div className="mt-4">
                            <p className="font-bold">Question</p>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={field.question}
                                onChange={(event) => handleQuestionChange(index, event)}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-sm"
                            />
                            {field.choices.map((choice, choiceIndex) => (
                                <div key={choiceIndex} className="flex items-center space-x-2 mt-2">
                                    <input
                                        type="text"
                                        placeholder="Enter choice"
                                        className='mt-2 w-full p-3 border border-gray-300 rounded-sm'
                                        value={choice}
                                        onChange={(event) => handleChoiceChange(index, choiceIndex, event)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleAddChoice(index)}
                                        className="text-green-500 text-2sm"
                                    >
                                        +
                                    </button>
                                </div>
                            ))}
                            <div className="mt-2">
                                <input
                                    type="checkbox"
                                    id={`enableOther-${index}`}
                                    checked={field.enableOther}
                                    onChange={() => {
                                        const newFields = [...fields];
                                        newFields[index].enableOther = !field.enableOther;
                                        setFields(newFields);
                                    }}
                                />
                                <label htmlFor={`enableOther-${index}`} className="ml-2">Enable “Other” option</label>
                            </div>
                        </div>
                    )}
                    {field.type === 'yesno' && (
                        <div className="mt-4">
                            <p className="font-bold">Question</p>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={field.question}
                                onChange={(event) => handleQuestionChange(index, event)}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-sm"
                            />
                            <div className="mt-2">

                                <input
                                    type="checkbox"
                                    id={`disqualifyOnNo-${index}`}
                                    checked={field.disqualifyOnNo}
                                    onChange={() => {
                                        const newFields = [...fields];
                                        newFields[index].disqualifyOnNo = !field.disqualifyOnNo;
                                        setFields(newFields);
                                    }}
                                />
                                <label htmlFor={`disqualifyOnNo-${index}`} className="ml-2">Disqualify candidate if the answer is no</label>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={handleAdd}
                className="flex items-center text-green-500 mt-4"
            >
                <HiPlus className="text-sm" />
                Add a question
            </button>
        </div>
    );
};

export default Form;