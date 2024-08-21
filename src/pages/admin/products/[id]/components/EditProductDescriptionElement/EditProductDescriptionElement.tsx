import EditProductDescriptionElementLayout from "./EditProductDescriptionElementLayout";
import {RichTextEditor, Link} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import '@mantine/tiptap/styles.css';
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {getEditProductRichTextEditorStyles} from "@/pages/admin/products/[id]/helpers";


type EditProductDescriptionElementProps = {
    description: string,
}

const EditProductDescriptionElement = (props: EditProductDescriptionElementProps) => {
    const {description} = props;
    const [content, setContent] = useState(description);
    const {setValue, formState, clearErrors} = useFormContext();
    const error = formState.errors.description;

    useEffect(() => {
        setValue("description", content === "<p></p>" ? "" : content);
        clearErrors("description");
    }, [content])

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({types: ['heading', 'paragraph']}),
        ],
        content,
        onUpdate: ({editor}) => {
            setContent(editor.getHTML());
        }
    });

    return (
        <EditProductDescriptionElementLayout>
            <h2 className="text-xl font-semibold mb-1.5">Опис товару</h2>
            <RichTextEditor styles={getEditProductRichTextEditorStyles(!!error)} editor={editor}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold/>
                        <RichTextEditor.Italic/>
                        <RichTextEditor.Underline/>
                        <RichTextEditor.Strikethrough/>
                        <RichTextEditor.ClearFormatting/>
                        <RichTextEditor.Highlight/>
                        <RichTextEditor.Code/>
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1/>
                        <RichTextEditor.H2/>
                        <RichTextEditor.H3/>
                        <RichTextEditor.H4/>
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote/>
                        <RichTextEditor.Hr/>
                        <RichTextEditor.BulletList/>
                        <RichTextEditor.OrderedList/>
                        <RichTextEditor.Subscript/>
                        <RichTextEditor.Superscript/>
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link/>
                        <RichTextEditor.Unlink/>
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft/>
                        <RichTextEditor.AlignCenter/>
                        <RichTextEditor.AlignJustify/>
                        <RichTextEditor.AlignRight/>
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo/>
                        <RichTextEditor.Redo/>
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>
                <RichTextEditor.Content/>
            </RichTextEditor>
            <MessageFormError error={error}/>
        </EditProductDescriptionElementLayout>
    )
}

export default EditProductDescriptionElement;
